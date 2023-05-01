import React, {useState} from "react";

function AddCharacter({onAddCharacter, characters}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [status, setStatus] = useState("")
    const [species, setSpecies] = useState("")
    const [gender, setGender] = useState("")

    function handleSubmit(e) {
      e.preventDefault();
      const characterData = {
        name: name,
        image: image,
        status: status,
        species: species,
        gender: gender
      };

      setName("");
      setImage("");
      setStatus("");
      setSpecies("");
      setGender("");

      fetch("http://localhost:4000/characters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(characterData),
      })
      .then((res) => res.json())
      .then((newCharacter) => onAddCharacter(newCharacter))
    }

    return (
        <div>
            {characters.length === 0 ? <div> <h3 className="header">No characters created...</h3> <h5>Create your character!</h5></div> : null}
            {characters.length > 0 ? <h5 className="header">Add another character:</h5> : null}

            <form className="newCharacter" onSubmit={handleSubmit}>
              <input className="input" type="text" id="name" placeholder="Character Name" value={name} onChange={(e) => setName(e.target.value)}/>
              <input className="input" type="text" id="image" placeholder="Image Link" value={image} onChange={(e) => setImage(e.target.value)}/>
              <input className="input" type="text" id="status" placeholder="Character Status" value={status} onChange={(e) => setStatus(e.target.value)}/>
              <input className="input" type="text" id="species" placeholder="Character Species" value={species} onChange={(e) => setSpecies(e.target.value)}/>
              <input className="input" type="text" id="gender" placeholder="Character Gender" value={gender} onChange={(e) => setGender(e.target.value)}/>
              <button type="submit" className="button">Submit</button>
            </form>

            {characters.length > 0 ? <h3 className="header"><strong>Your characters:</strong></h3> : null}

        </div>
    )
}

export default AddCharacter;