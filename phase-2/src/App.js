import React,{ useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ResultContainer from './Components/ResultContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewCharacterContainer from './Components/NewCharacterContainer';
import Home from './Components/Home';
import Title from './Components/Title';
import NoPageFound from './Components/NoPageFound';

function App() {

  const [results, setResults]  = useState([])
  const [species, setSpecies] = useState("All")
  const [filtered, setFiltered] = useState(results)
  const [all, setAll] = useState(results)

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(json => {
      setResults(json.results)
      setAll(json.results)
    }
      );
  },[])


  function searchFilter(name) {
    if (species === "All") {

      const searchResults = results.filter((obj) => 
        obj.name.toLowerCase().includes(name.toLowerCase()))

      setResults(searchResults)

    } else {

      const filteredSearchResults = filtered.filter((obj) => 
        obj.name.toLowerCase().includes(name.toLowerCase()))

      setResults(filteredSearchResults)

    }
  }

  function dropdownFilter(e) {
    const selectedSpecies = e.target.value;
    setSpecies(selectedSpecies);
  
    const filteredResults = all.filter((obj) => {
      if (selectedSpecies === "All") {
        return true;
      }
      return obj.species === selectedSpecies;
    });
  
    setFiltered(filteredResults);
    setResults(filteredResults);
  }

  return (
    <div className="App">
      <Router>
        <Title />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<ResultContainer 
            results={results} 
            dropdownFilter={dropdownFilter} 
            searchFilter={searchFilter}/>} />
            <Route path="/create-character" element={<NewCharacterContainer />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
      </Router>
    </div>
  )

}

export default App;

