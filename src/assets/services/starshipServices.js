
const getStarships = async () => {
    // let url = (`https://swapi.dev/api/starships/`)
    // try {
    //     const response = await fetch(url);
    //     let JSONdata = await response.json()

    //     if (!response.ok) {
    //       throw new Error(`Response status: ${response.status}`);
    //     }
    //     // ...
    //   } catch (error) {
    //     console.error(error.message);
    //   }

    let response = await fetch(`https://swapi.dev/api/starships/`);
    let response2 = await fetch (`https://swapi.dev/api/starships/?page=2`)
    let response3 = await fetch (`https://swapi.dev/api/starships/?page=3`)
    let response4 = await fetch (`https://swapi.dev/api/starships/?page=4`)
    let allResponse = await Promise.all([response.json(), response2.json(), response3.json(), response4.json()]) //got this from a google search "is there a way for one function to return multiple api calls"
    return allResponse
}

export {getStarships}
