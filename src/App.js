import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import style from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  onCountryChange = async (e) => {
    const country = e.target.value;
    if (country === 'global') {
      const data = await fetchData();
      this.setState({ data: data, country: '' });
    } else {
      const data = await fetchData(country);
      this.setState({ data: data, country: country });
    }
  }

  render() {
    return (
      <div className={style.container}>
        <h1>Covid-19 Tracker</h1>
        <Cards data={this.state.data} />
        <CountryPicker onCountryChange={this.onCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
