import React, { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);

    if (!(search.length === 0)) {
      const filtered = countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilter(filtered);
    }
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  console.log(search);

  return (
    <div>
      <div>
        <form>
          <label htmlFor="search">Search Country</label>
          <input
            type="text"
            name="search-term"
            id="search"
            value={search}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      <div>
        <h2>Countries</h2>
        <div>
          {filter.length > 10 ? (
            <p>Too many countries, type something more specific</p>
          ) : filter.length <= 10 && filter.length > 1 ? (
            filter.map((country) => (
              <Countries key={country.alpha2Code} country={country}/>
            ))
          ) : filter.length === 0 ? (
            <p>Type a country you would like to look up</p>
          ) : (
            <div>
              <Country
                country={filter[0]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
