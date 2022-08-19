import './App.css';
import BreedFilter from './Components/BreedFilter';
import Cats from './Components/Cats';
import { useState, useEffect } from 'react'
import {fetchCats} from './utils'


function App() {

  const [cats, setCats] = useState([]),
    [selectedBreed, setSelectedBreed] = useState('all')


    // useEffect on page load to load cats from the API
  useEffect(() => {
    fetchCats(setCats)
  }, [])


  return (
    <div className="App flexCol">
      {/* Cats Filter */}
      <BreedFilter
        cats={cats}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed} />
      {/* Cats view */}
      <Cats cats={cats}
        selectedBreed={selectedBreed} />
    </div>
  );
}

export default App;
