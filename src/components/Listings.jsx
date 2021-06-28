import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Stay from './Stay'
import './Listing.css'

export default function Listings({stays}) {
    return (
        <div>
            <div className="d-flex my-4 justify-content-between align-items-center "> 
        <h2 className="area">Stays in Finland</h2>
        <h2 className="numStays">{`${stays.length} stays`}</h2>
      </div>
      <Row >
        {stays && stays.length > 0 && stays.map((stay, index) => {
          if(index < 6){
            return (
              <Col className="mb-5">
              <Stay key={index} title={stay.title} photo={stay.photo} beds={stay.beds} type={stay.type} rating={stay.rating} superHost />
              </Col>
            )
          }
          })}
      </Row>
            
        </div>
    )
}
