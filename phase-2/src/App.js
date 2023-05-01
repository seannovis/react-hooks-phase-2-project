import React,{ useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header';
import ResultContainer from './Components/ResultContainer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NewCharacterContainer from './Components/NewCharacterContainer';
import Home from './Components/Home';
import Title from './Components/Title';

function App() {

  const [results, setResults]  = useState([])
  const [species, setSpecies] = useState("All")
  const [filtered, setFiltered] = useState(results)
  const [all, setAll] = useState(results)
  const [fav, setFav] = useState("")

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

  function setFavCharacter(fav) {
    setFav(fav)
  }

  return (
    <div className="App">
      <Router>
        <Title />
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result-container" element={<ResultContainer 
            results={results} 
            setFavCharacter={setFavCharacter} 
            dropdownFilter={dropdownFilter} 
            searchFilter={searchFilter} 
            fav={fav}/>} />
            <Route path="/add-character" element={<NewCharacterContainer />} />
          </Routes>
      </Router>
    </div>
  )

}

export default App;

