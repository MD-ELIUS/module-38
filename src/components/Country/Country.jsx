import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    console.log(country) 
   const countryName = country.name.common 
   const countryFlag = country.flags.flags.png
   const countryFlagAlt = country.flags.flags.alt
   const countryPopulation = country.population.population
  const countryLanguage = Object.values(country.languages.languages).join(", ");
  //console.log(countryLanguage) 
  const firstCurrency = Object.values(country.currencies?.currencies || {})[0];
  const currencyName = firstCurrency?.name || "Unknown";
  const currencySymbol = firstCurrency?.symbol || "";
  const countryArea = country.area.area

 const [visited, setVisited] = useState(false)
  const handleVisited = () => {

    // first system
    // if(visited) {
    //     setVisited(false)
    // }
    // else {
    //     setVisited(true)
    // }

    // second system
    // setVisited(visited ? false : true)

    // third system 
    setVisited(!visited) ;
    handleVisitedCountries(country);
  }

  return (
        // <div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}> 
         <div className= {`${visited ? 'country-visited' : 'country'}`} >  
            <img src={countryFlag} alt={countryFlagAlt} />
            <h3>Name: {countryName}  </h3>
            <p>Population: {countryPopulation} </p>
            <p>Language: {countryLanguage} </p>
           <p>Currency: {currencyName} </p> 
           <p>Area: {countryArea} {countryArea > 3000 ? "Big Country" : "Small Country"} </p>
           <button onClick={handleVisited}> {visited ? "Visited" : "Not Visited"} </button>
           <button onClick={() => {handleVisitedFlags(country?.flags?.flags?.png)}}>Add Visited Flag</button>
        </div> 
    );
};

export default Country;


/**
 * 1. inline css (style object)
 */