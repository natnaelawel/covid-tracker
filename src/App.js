import React  from 'react'
import {Cards, Chart, CountryPicker} from './components';

import styles from './App.module.css';
import {fetchData} from "./api";
import { CircularProgress, Typography } from '@material-ui/core';
import coronaImages from "./images/image.png";
class App extends React.Component {
    state = {
        data: {},
        selectedCountry: 'global'
    }
    async componentDidMount (){
        const data = await fetchData("global");
        this.setState({ data:data })
        console.log(this.state.data);
    }
    handleChangeCountry = async (country)=>{
      //fetch the data and set the state
      console.log('selected country ', country)
       const data = await fetchData(country);
       this.setState({ data: data, selectedCountry: country });
       console.log(this.state.data);
    }
    render() {
        const {data, selectedCountry} = this.state
        return (
          <div className={styles.container}>
            <img
              src={coronaImages}
              alt="covid background"
              className={styles.image}
            />
            {data.confirmed ? (
              <>
                <Cards data={data} selectedCountry={selectedCountry} />
                <CountryPicker handleChangeCountry={this.handleChangeCountry} />
                <Chart data={data} selectedCountry={selectedCountry} />
              </>
            ) : (
              <>
                <CircularProgress />
                <Typography variant="h2" gutterBottom>Loading</Typography>
              </>
            )}
          </div>
        );
    }
}
export default App;