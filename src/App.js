import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results';

// The API key is stored in the following variable which is only accessed in the .env file.
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const App = () => {

  const [ movieResultsState, setState ] = useState({
    s: "",
    results: [],
    selected: {}
  });
  
  // Setting up the api url with the key to a const 
  const apiurl = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;
  
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + movieResultsState.s)
        .then(({ data }) => {
          let results = data.Search;
          setState(prevState => {
            return { ...prevState, results: results}
          })
      })
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    })
  }
  return (
    <div className="App">
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={movieResultsState.results} />
      </main>
    </div>
  );
}

export default App;
