import React from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {
    return (
        <div className="heading">
            <nav>
                <span>
                    <Link to="/">Home</Link>
                </span>
                
                <span>
                    <Link to="result-container">Browse Characters</Link>
                </span>
              
                <span>
                    <Link to="add-character">Create Character</Link>
                </span>
            </nav>

            <Outlet />
            
            
        </div>
    )
}

export default Header;
