import React,{useEffect, useState} from 'react'
import {NativeSelect, FormControl, InputLabel} from '@material-ui/core';

import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api';

function CountryPicker({ handleChangeCountry }) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setCountries(await fetchCountries());
    };
    console.log("inside country picker ", countries);
    fetchData();
  }, []);

   const handleChange = (event) => {
       handleChangeCountry(event.target.value)
   };
  return (
    <FormControl className={styles.form_control}>
      <InputLabel htmlFor="country-native-helper">Country</InputLabel>

      <NativeSelect
        defaultValue=""
        inputProps={{
          name: "Country",
          id: "country-native-helper",
        }}
        onChange={handleChange}
      >
        <option value="global">Global</option>

        {countries &&
          countries.map(({ name }, i) => <option key={i} value={name}>{name}</option>)}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker
