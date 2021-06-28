import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './Header';
import Stay from './Stay'
import './App.css'
import Listings from './Listings';

 function App() {
  //Hold all Stays in state.
  const [Stays, setStays] = useState([])
  const [filteredCity, setFilteredCity] = useState();
  //check json and load it

 useEffect(() => {
      
    fetchStays();
    
  }, [])

  function fetchStays() {
    
    fetch("stays.json").then(res => res.json()).then(json => {setStays(json)})
  }

  return (
    <Container className="">
      <Listings stays={Stays}/>
    </Container>
  );
}

export default App;
