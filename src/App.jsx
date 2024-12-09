import { useState, useEffect } from 'react'
import './App.css'
import {getStarships} from './assets/services/starshipServices'
//import StarshipCard from './components/StarshipCard'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'

// src/App.jsx

const App = () => {

  const [starships, setStarships] = useState([])
  console.log(starships)

   const [shipSearchResults, setShipSearchResults] = useState([])
  //console.log(shipSearchResults)
   
   

  useEffect(( ) => { //ian helped me setting this up w my starship services
    const fetchStarships = async () => {
      let response = await getStarships()
      //let allResponse = [response[0].results, response[1].results]
      //console.log(response)
     const allResponse = response.flatMap(ships => ships.results) //got this flat map from a chat gpt prompt within a prompt "how to access an object within an array within an object within an array in javascript" then "how would i make an array of all item objects" 
    // console.log(allResponse)
      setStarships(allResponse)
    } 
    fetchStarships()
  },[])

     const addToList = (result) => {
      const shipSearch = result
      setShipSearchResults([shipSearch])
     }
   

   
  
  return (
   <>
   {/* <StarshipSearch/> */}
   <h1>Star Wars API</h1>
   <StarshipSearch starships={starships} addToList={addToList}/>
   <StarshipList starships={starships} shipSearchResults={shipSearchResults}/>
    {/* <div className="fullShipListDiv">
        {starships.map((ship, index) => { 
          return <div className="shipCard" key={index}>
            <h2 id="shipName">{ship.name}</h2>
            <p>Class: {ship.starship_class}</p>
            <p>Manufacturer: {ship.manufacturer}</p>
            <p>Model: {ship.model}</p>
            </div>;
        })}
    </div> */}
    </>
  )
}

export default App

