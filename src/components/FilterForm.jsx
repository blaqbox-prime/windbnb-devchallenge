import { Button, Container } from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { Col, Row } from "react-bootstrap";
import "./FilterForm.css";
import { useFilter } from "../contexts/FilterContext";
import RoomIcon from '@material-ui/icons/Room';
import { Close } from "@material-ui/icons";

export default function FilterForm({ stays }) {
  const [activeFilter, setActiveFilter] = useState("");
  const [showLocations, setShowLocations] = useState(true);
  const [showGuests, setShowGuests] = useState(false);

  const {
    location,
    numChildren,
    numAdults,
    numGuests,
    guestReducer,
    filterLocation,
    filterCity,
    getLocations,
    filter,
    showFilterForm,
    toggleForm,
    reset,
  } = useFilter();

  function ActivateFilter(e) {
    
    setActiveFilter(e.target.id);
    if(e.target.id === 'LocationContainer'){
      const currentState = showLocations;
      setShowLocations(!currentState)
    }

    if(e.target.id !== 'LocationContainer'){
      const currentState = showLocations;
      setShowGuests(!currentState)
    }

  }

  const handleSelection = (e) =>{
    console.log(e.target.id)
   let location = e.target.id; 
    let city = location.substring(0,location.indexOf(','))
    console.log(city);
    //set City filter
    filterCity(city) 
    //set location state ('city, country')
    filterLocation(location)
  }

  const greyText = {
    color: "#BDBDBD",
  };

  let guestOptionsClasses = [];

  const Handlefilter = () => {
    filter();
    toggleForm()

  }

  const ActiveFilterStyle = {
    border: "2px solid #BDBDBD",
    borderRadius: "1px",
  };

  return (
    <div className={`filter-form-container-overlay ${!showFilterForm && 'hide-form'}`}>
      <div className="filter-form-container">
        <Close onClick={toggleForm} className="form-close"/>
        <Container className="filter-form">
          <div className="filters">
            <div id="LocationContainer" onClick={(e) => ActivateFilter(e)} >
              <div className="textArea">
                <p className="heavy-text">Location</p>
                <p
                  className="regular-text"
                  style={
                    activeFilter !== "LocationContainer" && {
                      color: "#BDBDBD",
                    }
                  }
                >
                  {location !== undefined && location !== ""
                    ? `${location}`
                    : "Choose location"}
                </p>
              </div>
            </div>
            <div className="filterSeperator"></div>
            <div id="GuestsContainer" onClick={(e) => ActivateFilter(e)}>
              <div className="textArea">
                <p className="heavy-text">Guests</p>
                <p
                  className="regular-text"
                  style={activeFilter !== "LocationContainer" && greyText}
                >
                  {numGuests > 0 ? `${numGuests} Guests` : "Add guests"}
                </p>
              </div>
            </div>
            <div className="filterSeperator"></div>
            <div id="SearchBtnContainer" >
                <div className="Searchbtn" onClick={(e) => Handlefilter()}>
                    <SearchIcon style={{color: '#f2f2f2'}}/>
                    <div className="btn-text">Search</div>
                </div>
            </div>
          </div>
          <div className="options">
            <div className={`locations ${showLocations ? 'show' : 'hide'}`}>
                <ul>
                {getLocations(stays).map((location, index) =>{return(
                    <li key={index} className="d-flex align-items-center my-3 
                    "
                    id={location}
                    onClick={
                      (e) => handleSelection(e)
                    }
                    >
                        <RoomIcon />
                        <div className="mx-2" style={{fontSize:'16px'}}>{location}</div>
                    </li>
                )})}
                </ul>
            </div>
            <div id="guestsOptions">
              <div className="adults">
                <h3 className="heavy-text">Adults</h3>
                <p ClassName="regular-text">Ages 13 or above</p>
                <div className="d-flex align-items-center">
                  <div className="plus-minus-container text-center" onClick={() => guestReducer('MINUS_ADULTS')}>-</div>
                  <div className="number">{numAdults}</div>
                  <div className="plus-minus-container text-center" onClick={() => guestReducer('ADD_ADULTS')}>+</div>
                </div>
              </div>
              <div className="children">
              <h3 className="heavy-text">Children</h3>
                <p ClassName="regular-text">Ages 2 - 12</p>
                <div className="d-flex align-items-center">
                  <div className="plus-minus-container text-center" onClick={() => guestReducer('MINUS_CHILDREN')}>-</div>
                  <div className="number">{numChildren}</div>
                  <div className="plus-minus-container text-center" onClick={() => guestReducer('ADD_CHILDREN')}>+</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
 