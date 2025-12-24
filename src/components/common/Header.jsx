import React from 'react'
import { Link } from 'react-router-dom';
import { navlinks } from '../../components/data/dummydata';
import logo from '../../assets/images/logo.png'

export const Header = () => {
    return (
        <>
            <header>
                <div className="header-container layout">
                    <div className="logo">
                        <img src={logo} className="logo-img" alt="portfolio logo" />
                    </div>
                    <nav className="navbar">
                        {navlinks.map((navlink, index) => {
                            return (
                                <Link key={index} to={navlink.url}>
                                    {navlink.text}
                                </Link>
                            )
                        })}
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
