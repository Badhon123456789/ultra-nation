import React from 'react';
import  "./Country.css";

const Country = (props) => {
    const {name, flags, population, languages, region, currencies,capital} = props.country;
    const handleAddCountry = props.handleAddCountry

    return (
      <div className='box'>
          <img src={flags.png} alt="" />
          <h2>
            This is {name}
          </h2>
          <h3>{population} peoples live in here</h3>
          <p>They use {languages[0].name} language to communicate</p>
          <h3>Region : {region}</h3>
          {/* <p>Currency : {currencies[0].name}</p> */}
          <h2>Capital: {capital}</h2>
          <button onClick={()=>handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;