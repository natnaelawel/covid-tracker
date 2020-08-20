import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableUrl = url
  if(country !== 'global'){
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    // const {data} = await axios.get(url)
    // const {confirmed, recovered, deaths,lastUpdate} = data
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    const modifiedData = {confirmed,recovered,deaths,lastUpdate,};
    return modifiedData;
  } catch (error) {
    console.error("error occured ", error.message);
  }
};

export const fetchDailyReport = async ()=>{
  try {
    const {data} = await axios.get(`${url}/daily`)
    
    const modifiedData = data.map((dailyReport) => ({
      confirmed: dailyReport.confirmed.total,
      deaths: dailyReport.deaths.total,
      date: dailyReport.reportDate,
    }));
    console.log('daily data', modifiedData);
    return modifiedData
  } catch (error) {
    console.log('error occured', error)
  }
}
export const fetchCountries = async ()=>{
  try {
    const { data:{countries} } = await axios.get(`${url}/countries`);
    // console.log('countries are ', countries)
    return countries
  } catch (error) {
    console.log('error occured', error)
  }
}