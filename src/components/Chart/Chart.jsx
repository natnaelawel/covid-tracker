import React,{useEffect, useState} from 'react'
import {fetchDailyReport} from '../../api';
import { Line, Bar } from "react-chartjs-2";

import styles from './Chart.module.css'
function Chart({data: {confirmed, recovered, deaths}, selectedCountry}) {
    const [dailyReport, setDailyReport] = useState([])

    useEffect(() => {
        const fetchApi = async () =>{
            setDailyReport(await fetchDailyReport())
        }
        fetchApi()
        console.log('daily report ', dailyReport)     
    }, [])

    console.log(confirmed, recovered, deaths)
    const lineChart = dailyReport.length ? (
      <Line
        className={styles.charts_graph}
        options={{ maintainAspectRatio: false }}
        data={{
          labels: dailyReport.map(({ date }) => date),
          datasets: [
            {
              data: dailyReport.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyReport.map(({ deaths }) => deaths),
              label: "Deaths",
              backgroundColor: "red",
              borderColor: "rgba(255, 0, 0, 0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

    const barChart = confirmed && (
      <Bar
        className={styles.charts_graph}
        options={{ maintainAspectRatio: false }}
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${selectedCountry}` },
        }}
      />
    );
    return (
        <div className={styles.container}>
            {selectedCountry !== 'global' ? barChart : lineChart}
            {/* {barChart} */}
        </div>
    )
}

export default Chart
