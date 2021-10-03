import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import {useFilter} from '../contexts/FilterContext'

export default function Navbar() {
    const {location, numGuests, toggleForm} = useFilter()

    return (
        <nav className="navbar justify-content-between align-items-center mt-4" style={{marginBottom:'70px'}}>
            <a href="#"><img src="images/logo.png" alt="windbnb logo" /></a>
            <div className="filterContainer" onClick={() => toggleForm()}>
                <div id="location">{location ? location : 'Filter location' }</div>
                <div className="filterSeperator"></div>
                <div id="guests">{numGuests <= 0 ? 'Add Guests' : numGuests}</div>
                <div className="filterSeperator"></div>
                <div className="icon"><SearchIcon style={{color:"#EB5757", marginRight:"5px"}}/></div>
            </div>
        </nav>
    )
}
