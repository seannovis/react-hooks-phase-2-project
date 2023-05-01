import React from "react";

function NewCard({character, remove}) {

    function handleDelete() {
        fetch("http://localhost:4000/characters" + character.id, {
          method: "DELETE"
        })
        .then(res => {
          remove(character.id);
        });
      }


    return (
        <div className="new-card">
            <h4>{character.name}</h4>
            <img className="new-img" src={character.image} alt={character.name}/>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>                
            <br></br>
            <button onClick={handleDelete} className="delete">❌</button>
        </div>    
    )
}

export default NewCard;