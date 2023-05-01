import React, {useState} from "react";

function Dropdown({dropdownFilter}) {

    const [human, setHuman] = useState("Human");
    const [alien, setAlien] = useState("Alien");


    function handleChange(e) {
        dropdownFilter(e)
    }

    return (
        <label className="dropdown">
            Species: 
            <select name="species" onChange={handleChange}>
                <option value="All">All</option>
                <option value={human}>Human</option>
                <option value={alien}>Alien</option>
            </select>
        <br></br>
        </label>
    )

}

export default Dropdown;