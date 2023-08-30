import React, { useEffect, useState } from 'react';
import './Country.css';

const Country = () => {
    return (
        <div>
            <h1>Welcome to my first REACT Server!!!</h1>
            <nav><a href='index.html'>Home</a><a href='https://restcountries.com/'>About</a><a href='https://github.com/asif93-138'>Contact</a></nav>
            <LoadData />
        </div>
    );
};

function LoadData() {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
    }, []);
    
    return (
      <div>
        <h1>Total Countries : {countries.length}</h1>
        {countries.map(country => <ShowData key={country.cca3} country={country} />)}
      </div>
    );
  }
  
function ShowData(props) {console.log(); return (<div><h2>Country Name : {props.country.name.common}</h2><h3>Capital : {props.country.capital ? props.country.capital[0]:"missing"}</h3><h5>Population : {props.country.population}</h5><h3>Region : {props.country.region}</h3></div>)}

export default Country;