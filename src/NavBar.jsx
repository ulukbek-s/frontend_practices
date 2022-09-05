import React from "react"
import airbnb from './assets/airbnb-logo.png'

function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={airbnb} className="nav-logo"/>
        </nav>
    )
}

export default Navbar