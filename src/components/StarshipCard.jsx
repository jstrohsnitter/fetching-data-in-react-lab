const StarshipCard = (props) => {
    return <div className="fullShipListDiv">
    {props.starships.map((ship, index) => { 
      return <div className="shipCard" key={index}>
        <h2 id="shipName">{ship.name}</h2>
        <p>Class: {ship.starship_class}</p>
        <p>Manufacturer: {ship.manufacturer}</p>
        <p>Model: {ship.model}</p>
        </div>;
    })}
</div>
};

export default StarshipCard