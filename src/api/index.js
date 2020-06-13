const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeUrl = url;
    if (country) changeUrl = `${url}/countries/${country}`;
    try {
        const resp = await fetch(changeUrl);
        const data = await resp.json();
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }
        return modifiedData;
    } catch (error) {
        console.log('error in cards', error);
    }
}

export const fetchDailyData = async () => {
    try {
        const resp = await fetch(`${url}/daily`);
        const data = await resp.json();
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log('error in daily', error);
    }
}

export const countries = async () => {
    try {
        const resp = await fetch(`${url}/countries`);
        const data = await resp.json();
        const countries = data.countries;
        const modifiedData = countries.map((country) => {
            return country.name;
        });
        return modifiedData;
    } catch (error) {
        console.log('error in countires', error);
    }
}