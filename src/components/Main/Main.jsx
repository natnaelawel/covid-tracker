import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Typography,
  CardContent,
  Card,
} from "@material-ui/core";
import { fetchData, getCountriesData } from "../../api";

import CountryPicker from "../CountryPicker/CountryPicker";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import TopListTable from "../Table/Table";
import SingleCard from "../Cards/SingleCard/SingleCard";
import Map from "../Map/Map";
import styles from "./Main.module.css";

function Main({ countries, allData, topTenVictims }) {
  const [data, setData] = useState(allData);
  const [mapZoom, setMapZoom] = useState(3);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  // const [topTenVictims, setTopTenVictims] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("global");

  // const [countries, setCountries] = useState([])

  const handleChangeCountry = (country) => {
    setSelectedCountry(country);
  };
 
  useEffect(() => {
    const fetchCountriesData = async () => {
      const data = await fetchData(selectedCountry);
      setData(data);
    };
    fetchCountriesData();
  }, [selectedCountry]);

  return (
    <div className={styles.main}>
      {countries ? (
        <>
          <Cards
            style={{ border: "1px solid red" }}
            data={data}
            selectedCountry={selectedCountry}
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
                <CountryPicker handleChangeCountry={handleChangeCountry} />
              </div>
              <div className={styles.chartBody}>
                <Chart data={data} selectedCountry={selectedCountry} />
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
        </>
      ) : (
        <>
          <CircularProgress />
          <Typography variant="h2" gutterBottom>
            Loading
          </Typography>
        </>
      )}
    </div>
  );
}

export default Main;
