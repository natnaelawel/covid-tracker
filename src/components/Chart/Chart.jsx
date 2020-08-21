import React,{useEffect, useState} from 'react'
import {getDailyReport, getSpecificReport, getMonthlyReport} from '../../api';
import { Line, Bar } from "react-chartjs-2";
import styles from './Chart.module.css';
import numeral from 'numeral'
import { prettyPrintStat } from "../../utils/utils";


function Chart({monthlyReport, selectedCountry='global'}) {
    // const [monthlyReport, setMonthlyReport] = useState([])

    // useEffect(() => {
    //     const fetchApi = async () =>{
    //         const data = await getMonthlyReport(selectedCountry)
    //         setMonthlyReport(data)
    //         console.log('monthly Report', monthlyReport)
    //     }
    //     fetchApi()
    // }, [])
    const options = {
  legend: {
    display: false,
  },
  title: { display: true, text: `Last 120 day state in ${selectedCountry}` },
  elements: {
    point: {
      radius: 2,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

    const lineChart = monthlyReport?.cases ? (
      <Line
        className={styles.charts_graph}
        data={{
          labels: Object.keys(monthlyReport.cases),
          datasets: [
            {
              data: Object.values(monthlyReport.cases),
              label: "Infected",
              borderColor: "rgba(0, 0, 255, 0.5)",
              // fill: true,
            },
             
            {
              data: Object.values(monthlyReport.recovered),
              label: "Recovered",
              borderColor: "rgba(0, 255, 0, 0.5)",
              // fill: true,
            },
            {
              data: Object.values(monthlyReport.deaths),
              label: "Deaths",
              borderColor: "rgba(255, 0, 0, 0.5)",
              // fill: true,
            },
          ],
        }}
        options={options}
      />
    ) : null;

  const changedData = (monthlyReport)=> {
      let addData = [];
      for(let i = 0; i< monthlyReport.cases.length; i++){
        addData.push([
            Object.values(monthlyReport.cases)[i], 
            Object.values(monthlyReport.recovered)[i], 
            Object.values(monthlyReport.deaths)[i], 
            ])
      }
      return addData;
    }
    const barChart = monthlyReport?.cases && (
      <Bar
        className={styles.charts_graph}
        data={{
          // labels: ["Infected", "Recovered", "Deaths"],
          labels: Object.keys(monthlyReport?.cases),
          backgroundColor: ["rgba(0,10,220,0.5)"],
          datasets: [
            {
              label: "Infected",
              backgroundColor: [
                ...Object.values(monthlyReport.cases).map(
                  (data) => "rgba(0, 0, 255, 0.5)"
                ),
              ],
              data: [...Object.values(monthlyReport.cases)],
            },
            {
              label: "Recovered",
              backgroundColor: [
                ...Object.values(monthlyReport.recovered).map(
                  (data) => "rgba(0, 255, 0, 0.5)"
                ),
              ],
              data: [...Object.values(monthlyReport.recovered)],
            },
            {
              label: "Deaths",
              backgroundColor: [
                ...Object.values(monthlyReport.deaths).map(
                  (data) => "rgba(255, 0, 0, 0.5)"
                ),
              ],
              data: [...Object.values(monthlyReport.deaths)],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          legend: { display: false },
          title: {
            display: true,
            text: `Last 10 day state in ${selectedCountry}`,
          },
          responsive: true,
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  beginAtZero: true,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return prettyPrintStat(value);
                  },
                },
              },
            ],
          },
        }}
      />
    );
    return (
        <div className={styles.container} styles={{border: '1px solid red'}}>
            {selectedCountry !== 'global' ? barChart : lineChart}
            {/* {barChart} */}
        </div>
    )
}

export default Chart
