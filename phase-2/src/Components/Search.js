import React, {useState} from "react";

function Search({searchFilter}) {

    const [input, setInput] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        searchFilter(input);
    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            
            <input
            type="text"
            id="search"
            placeholder="Search characters..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="search-button">🔍</button>

        </form>
    )


}

export default Search;