const StarshipCard = (props) => {
    console.log(props.ship)
      return   <div className="shipCard" >
        <h2 id="shipName">{props.ship.name}</h2>
        <p>Class: {props.ship.starship_class}</p>
        <p>Manufacturer: {props.ship.manufacturer}</p>
        <p>Model: {props.ship.model}</p>
        </div>;
      
      
}

export default StarshipCard