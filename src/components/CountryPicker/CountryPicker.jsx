import React,{ useState} from 'react'
import {FormControl, InputLabel, Select} from '@material-ui/core';

import styles from './CountryPicker.module.css'
// import { fetchCountries } from '../../api';

function CountryPicker({ handleChangeCountry , countries}) {
  // const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('global')
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setCountries(await fetchCountries());
  //   };
  //   console.log("inside country picker ", countries);
  //   fetchData();
  // }, []);

   const handleChange = (event) => {
       setSelectedCountry(event.target.value);
       handleChangeCountry(event.target.value)
   };
  return (
    <FormControl variant="outlined" className={styles.form_control}>
      <InputLabel htmlFor="country-native-helper">Country</InputLabel>
      <Select
        native
        defaultValue={selectedCountry}
        value={selectedCountry}
        onChange={handleChange}
        label="Country"
        inputProps={{
          name: "Country",
          id: "country-native-helper",
        }}
      >
      
        <option value="global">Global</option>

        {countries &&
          countries.map(({ name }, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
      </Select>
    </FormControl>
  );
}

export default CountryPicker
