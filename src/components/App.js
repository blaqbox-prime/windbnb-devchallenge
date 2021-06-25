import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './Header';
import Stay from './Stay'

 function App() {
  //Hold all Stays in state.
  const [allStays, setAllStays] = useState([])
  //check json and load it

 useEffect(() => {
      
    fetchStays();
    
  }, [])

  function fetchStays() {
    
    fetch("stays.json").then(res => res.json()).then(json => {setAllStays(json)})
  }

  return (
    <Container>
      <Row >
        {allStays && allStays.length > 0 && allStays.map((stay, index) => {
          if(index < 3){
            return (
              <Col className="mb-2">
              <Stay key={index} title={stay.title} photo={stay.photo} beds={stay.beds} type={stay.type} rating={stay.rating} superHost />
              </Col>
            )
          }
          })}
      </Row>
    </Container>
  );
}

export default App;
