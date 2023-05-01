import React, { useState } from "react";


function ResultCard({result, setFavCharacter}) {

    const [fav, setFav] = useState("")

    function handleClick() {
        setFav(result.name)
        setFavCharacter(fav)
    }

    return (
        <div>
            <h4>{result.name}</h4>
            <img src={result.image} alt={result.name}/>
            <p>Status: {result.status}</p>
            <p>Species: {result.species}</p>
            <p>Gender: {result.gender}</p>                
            <br></br>
            <button onClick={handleClick} className="fav-button">Favourite me!</button>
        </div>    
    )
}

export default ResultCard;