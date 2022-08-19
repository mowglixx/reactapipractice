import './App.css';
import BreedFilter from './Components/BreedFilter';
import Cats from './Components/Cats';
import { useState, useEffect } from 'react'

// API key from env or use DEMO_API_KEY 
const API_KEY = process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : "DEMO_API_KEY"

const showKey = () => {
  console.log('api key:' + API_KEY)
}

function App() {

  const [cats, setCats] = useState([]),
    [selectedBreed, setSelectedBreed] = useState('all')


    // useEffect on page load to load cats from the API
  useEffect(() => {
    return async () => {
      showKey()
      await fetch(
      'https://api.thecatapi.com/v1/breeds'
    )
      .then(promise => promise.json())
      .then(catsList => {
        setCats(catsList)
      })
    }
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
