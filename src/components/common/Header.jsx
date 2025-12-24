import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="logo">
                        <img src={logo} alt="portfolio logo" />
                    </div>
                    <nav className="navbar">
                        {navli}
                        {/* <Link to=''>{}</Link> */}
                        {/* <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul> */}
                    </nav>
                </div>
            </header>
        </>
    )
}
