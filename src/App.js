import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country.js";
import Cart from "./components/Cart/Cart";


function App() {
  const [countries, setCountries] = useState([]);
  const [addedCountry, setAddedCountry] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddCountry = (country) => {
    setAddedCountry([...addedCountry, country]);

  }
  return (
    <div className="App">
      <h1>Number of countries : {countries.length}</h1>
      <h2>Added country: {addedCountry.length}</h2>
      <Cart cart = {addedCountry}></Cart>
      <ol type="1">
        {countries.map((country) => (
          <div key={country.alpha3Code}>
            <Country country={country} handleAddCountry ={handleAddCountry}  ></Country>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default App;
