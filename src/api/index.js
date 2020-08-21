import axios from "axios";
// import moment from "momentjs"
import moment from "moment";

// const url = "https://covid19.mathdro.id/api";
const url = "https://disease.sh/v3/covid-19";

// export const fetchData = async (country) => {
//   let changeableUrl = url;
//   if (country !== "global") {
//     changeableUrl = `${url}/countries/${country}`;
//   }
//   try {
//     // const {data} = await axios.get(url)
//     // const {confirmed, recovered, deaths,lastUpdate} = data
//     const {
//       data: { confirmed, recovered, deaths, lastUpdate },
//     } = await axios.get(changeableUrl);
//     const modifiedData = { confirmed, recovered, deaths, lastUpdate };
//     return modifiedData;
//   } catch (error) {
//     console.error("error occured ", error.message);
//   }
// };

export const getSpecificReport = async (country) => {
  let changeableUrl = "";
  if (country !== "global") {
    changeableUrl = `${url}/countries/${country}`;
  } else {
    changeableUrl = `${url}/all`;
  }
  try {
    const { data } = await axios.get(changeableUrl);
    const modifiedData = {
      cases: data.cases,
      todayCases: data.todayCases,
      recovered: data.recovered,
      todayRecovered: data.todayRecovered,
      active: data.active,
      critical: data.critical,
      deaths: data.deaths,
      todayDeaths: data.todayDeaths,
      lastUpdate: moment(data.updated).format("LLLL"),
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const getMonthlyReport = async (country) => {
  let changeableUrl = "";
  try {
    if (country !== "global") {
      changeableUrl = `${url}/historical/${country}?lastdays=10`;
      const {
        data: { timeline },
      } = await axios.get(changeableUrl);
      return timeline;
    } else {
      changeableUrl = `${url}/historical/all?lastdays=120`;
      const { data } = await axios.get(changeableUrl);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDailyReport = async () => {
  try {
    // const { data } = await axios.get(`${url}/daily`);

    // const modifiedData = data.map((dailyReport) => ({
    //   confirmed: dailyReport.confirmed.total,
    //   deaths: dailyReport.deaths.total,
    //   date: dailyReport.reportDate,
    // }));

    const { data } = await axios.get("https://disease.sh/v3/covid-19/all");
    const modifiedData = data.map((dailyReport) => ({
      confirmed: dailyReport.cases,
      todayCases: dailyReport.todayCases,
      recovered: dailyReport.recovered,
      todayRecovered: dailyReport.todayRecovered,
      active: dailyReport.active,
      critical: dailyReport.critical,
      deaths: dailyReport.deaths.total,
      date: moment(dailyReport.updated).format(),
    }));
    return modifiedData;
  } catch (error) {
    console.log("error occured", error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    // console.log('countries are ', countries)
    return countries;
  } catch (error) {
    console.log("error occured", error);
  }
};
export const getCountriesReport = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    return data;
  } catch (error) {}
};

export const getCountriesData = async () => {
  try {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return data;
    // return data.map((country) => ({
    //   name: country.country,
    //   value: country.countryInfo.iso2,
    //   countryInfo: country.countryInfo,
    // }));
  } catch (error) {
    console.log(error);
  }
};

export const getSingleData = async (name = null) => {
  let url = "";
  if (name === "africa") {
    url = `https://disease.sh/v3/covid-19/continents/africa`;
  } else {
    url = `https://disease.sh/v3/covid-19/countries/ethiopia`;
  }
  try {
    const {
      data: {
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        todayRecovered,
        active,
        critical,
      },
    } = await axios.get(url);
    return {
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
      active,
      critical,
    };
  } catch (error) {
    console.log(error);
  }
};
