import React from "react";
import img from "../Image.png"

function Home() {
    return (
        <React.Fragment>
            <h3 className="header">View, favourite, and create your own Rick and Morty characters!</h3>
            <img src={img} alt="Rick and Morty Cover" title="Rick and Morty Cover" className="cover-img"/>
        </React.Fragment>
    )
}

export default Home;