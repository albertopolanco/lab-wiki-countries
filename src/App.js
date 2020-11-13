import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  state = { countries }

  componentDidMount = async () => {
    const countries = await axios.get("http://localhost:3000/countries/")

    this.setState({ countries: countries})
  }

  render() {
    // L18 definimos ruta para cuando se acceda a una ruta determinada se reenderice un countrydetails de esa informacion.
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
          <CountriesList countries={countries} />
        <Switch>
          <Route exact path='/countries/:cca3' render={props => (<CountryDetails {...props} countries={countries} />)} />
        </Switch>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
