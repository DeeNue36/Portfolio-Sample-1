import React, { useState } from 'react' 
import { Link } from 'react-router-dom';
import { navlinks } from '../../components/data/dummydata';
import logo from '../../assets/images/logo.png'
import { Menu } from '@mui/icons-material'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header>
                <div className="header-container layout">
                    <div className="logo">
                        <img src={logo} className="logo-img" alt="portfolio logo" />
                    </div>
                    <nav className={ isOpen ? "hideNav" :"navbar"}>
                        {navlinks.map((navlink, index) => {
                            return (
                                <Link key={index} to={navlink.url}>
                                    {navlink.text}
                                </Link>
                            )
                        })}
                    </nav>
                    <button className='toggle'
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }} 
                    >
                        <Menu className='menu-icon'></Menu>
                    </button>
                </div>
            </header>
        </>
    )
}
