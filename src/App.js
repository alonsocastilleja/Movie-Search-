import React, { useState } from 'react';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results';

const API_KEY = `${process.env.REACT_APP_API_KEY}`
console.log(API_KEY)

function App() {

  const [ state, setState ] = useState({
    s: "",
    results: [],
    selected: {}
  });

  // Setting up the api url with the key to a const 
  const apiurl = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`;
  
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        console.log(results)
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
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
