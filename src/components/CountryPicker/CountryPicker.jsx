import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { countries } from '../../api';

const CountryPicker = (props) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const fetchedData = await countries();
            setFetchedCountries(fetchedData);
        }
        fetchApi();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={props.onCountryChange}>
                <option value='global'>Global</option>
                {fetchedCountries.map((country, i) => {
                    return <option key={i} value={country}>{country}</option>
                })}
            </NativeSelect>
        </FormControl>
    );
}
export default CountryPicker;