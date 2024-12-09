//import { useState, useEffect } from "react"
import StarshipCard from "./StarshipCard"

const StarshipList = (props) => {

    const wholeList = props.starships
    //console.log(wholeList)
    const search = props.shipSearchResults
    //console.log(search) 

    const RenderPage = () => {
        if (search != '' ) {
           return search.map((ship, index) => {
           return (<StarshipCard key={index} ship={ship} />)
        }) 
    } else {
        return  wholeList.map((banana, index) => {
        return (<StarshipCard key={index} ship={banana} />)
        
    }
    
)}
    }


    return ( 
        <>
        <h3>Starships</h3>
        <div className="fullShipListDiv">
            {RenderPage()}
        </div>
        </>
    )
}

export default StarshipList