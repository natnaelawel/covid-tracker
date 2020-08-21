import React  from 'react'

import styles from './App.module.css';
import {fetchData, getCountriesData} from "./api";
import "leaflet/dist/leaflet.css";
import { topTenVictims } from "./components/utils/utils";
import {Appbar, Main, Footer} from './components';

class App extends React.Component {
  state = {
    data: {},
    countries: [],
    topTenVictims: [],
  };
  async componentDidMount() {
    const data = await fetchData("global");
    const countries = await getCountriesData();
    const topTen = await topTenVictims(countries);

    this.setState({ data: data, countries: countries, topTenVictims: topTen });
  }

  render() {
    const {
      data,
      countries,
      topTenVictims,
    } = this.state;
    return (
      <div>
        <Appbar />
        <div className={styles.container}>
          <Main
            allData={data}
            countries={countries}
            topTenVictims={topTenVictims}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;