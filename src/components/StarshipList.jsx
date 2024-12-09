//import { useState, useEffect } from "react"
import StarshipCard from "./StarshipCard"

const StarshipList = (props) => {

    const wholeList = props.starships
    //console.log(wholeList)
    const search = props.shipSearchResults
    //console.log(search) 

    const countItems = () => {
        if (search != '') {
            return <p>Number of Results: {search.length}</p>
        } else {
        return <p>Number of Results: {wholeList.length}</p>
        }
    }

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
        <div>{countItems()}</div>
        <div className="fullShipListDiv">
            {RenderPage()}
        </div>
        </>
    )
}

export default StarshipList