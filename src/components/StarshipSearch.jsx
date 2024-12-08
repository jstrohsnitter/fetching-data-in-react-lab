import { useState } from 'react'

const StarshipSearch = (props) => {

    const [term, setTerm] = useState('')
    console.log(term)

    const [result, setResult] = useState([])
    console.log(result)
    
    const handleInputChange = (event) => {
        setTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchResult = props.starships.filter((ships) => ships.name === `${term}` )
        setResult(searchResult)
    }

    return  (   
     <>
    <div className="formDiv">
        <h3>Search</h3>
         {/* Form will go here */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchTerm">Search Term: </label>
            <input type="text" onChange={handleInputChange}/>
            <input type="submit" />
        </form>
    </div>
    {/* <StarshipList result={result}/> */}
    </>   
   
    )
}

export default StarshipSearch