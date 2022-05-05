import React from "react";
import axios from "axios";

import "../SASS/_header.scss";

const Header = () => {

    return (
        <div className="header-container">
            <header id="header">
                <section id="filmer-section" className="header-section">
                    <h1 id="filmer-text">filmer</h1>
                </section>
                <section id="links-section" className="header-section">
                    <h3 className="header-links">sign up</h3>
                    <h3 className="header-links">login</h3>
                    <h3 className="header-links">about</h3>
                    <h3 className="header-links">news</h3>
                    <input id="searchbar" placeholder="search" />
                </section>
            </header>
        </div>
    )
}

export default Header