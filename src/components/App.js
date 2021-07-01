import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './Header';
import Stay from './Stay'
import './App.css'
import Listings from './Listings';
import FilterProvider from '../contexts/FilterContext';
import Navbar from './Navbar';
import {useFilter} from '../contexts/FilterContext'
import FilterForm from './FilterForm';

 function App() {
  //Hold all Stays in state.
  const { filteredStays, fetchStays} = useFilter()
  //check json and load it

 useEffect(() => {
      
    fetchStays();
    
  }, [])



  return (
    
    <Container className="">
      <FilterForm stays={filteredStays}/>
      <Navbar/>
      <Listings stays={filteredStays}/>
    </Container>
    
  );
}

export default App;
