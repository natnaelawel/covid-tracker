import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Typography,
} from "@material-ui/core";
import {getSpecificReport, getCountriesReport,  getMonthlyReport} from "../../api";

import CountryPicker from "../CountryPicker/CountryPicker";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import TopListTable from "../Table/Table";
import SingleCard from "../Cards/SingleCard/SingleCard";
import Map from "../Map/Map";
import styles from "./Main.module.css";
import { getTopTenVictims, getCountries } from "../../utils/utils";


function Main() {
  const [dailyReport, setDailyReport] = useState([]);
  const [countries, setCountries] = useState([]);
  const [topTenVictims, setTopTenVictims] = useState([]);
  const [mapZoom] = useState(3);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [selectedCountry, setSelectedCountry] = useState("global");
  const [monthlyReport, setMonthlyReport] = useState([]);
  const [, setIsLoading] = useState(true);
  // const [activeCard,   setActiveCard] = useState('cases')



  const handleChangeCountry = async (country) => {
    setSelectedCountry(country);
  };

  useEffect(() => {
    const fetchCountriesData = async () => {
      setIsLoading(true)
      try {
        let data = await getSpecificReport(selectedCountry);
        setDailyReport(data);
        data = await getCountriesReport();
        setTopTenVictims(getTopTenVictims(data))
        setCountries(getCountries(data))
        data = await getMonthlyReport(selectedCountry)
        setMonthlyReport(data)
        setIsLoading(false)
      } catch (error) {
        // setIsLoading(false);
        console.log(error.message)  
      }
    };
    fetchCountriesData();
  }, [selectedCountry]);
 
     useEffect(() => {
        const fetchApi = async () =>{
            const data = await getMonthlyReport(selectedCountry)
            setMonthlyReport(data)
            console.log('monthly Report', monthlyReport)
        }
        fetchApi()
    }, [monthlyReport, selectedCountry])
  const onCardClicked = (casesType)=>{
    setCasesType(casesType)
    console.log('cases type is ', casesType)
  }

  return (
    <div className={styles.main}>
      {dailyReport ? (
        <div>
          <Cards
            style={{ border: "1px solid red" }}
            dailyReport={dailyReport}
            selectedCountry={selectedCountry}
            onCardClicked={onCardClicked}
            casesType={casesType}
          />
          <Map
            countries={countries}
            casesType={casesType}
            center={mapCenter}
            zoom={mapZoom}
          />
          <div className={styles.mid}>
            <div className={styles.chartArea}>
              <div className={styles.chartHeader}>
                <Typography variant="h5" gutterBottom>
                  Covid-19 Statistics
                </Typography>
                <CountryPicker
                  countries={countries}
                  handleChangeCountry={handleChangeCountry}
                />
              </div>
              <div className={styles.chartBody}>
                <Chart
                  monthlyReport={monthlyReport}
                  selectedCountry={selectedCountry}
                />
              </div>
            </div>
            <div className={styles.tableArea}>
              <Typography variant="h5" gutterBottom>
                Top Victims of Covid-19 in the World
              </Typography>
              <TopListTable topTenVictims={topTenVictims} />
            </div>
          </div>

          <div className={styles.status}>
            <Typography variant="h4" gutterBottom>
              Covid-19 in Africa
            </Typography>
            <SingleCard className={styles.status_list} name="africa" />
          </div>

          <div className={styles.status}>
            <Typography variant="h4" gutterBottom>
              Covid-19 in Ethiopia
            </Typography>
            <SingleCard className={styles.status_list} name="ethiopia" />
          </div>
        </div>
      ) : (
        <div className={styles.loading}>
          <CircularProgress />
          <Typography variant="h2" gutterBottom>
            Loading
          </Typography>
        </div>
      )}
    </div>
  );
}

export default Main;
