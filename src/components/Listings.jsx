import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Stay from './Stay'
import './Listing.css'
import {useFilter} from '../contexts/FilterContext'

export default function Listings({stays}) {
  const {location} = useFilter()
    return (
        <div>
            <div className="d-flex my-4 justify-content-between align-items-center "> 
        <h2 className="area">Stays in {location ? location : 'Finland'}</h2>
        <h2 className="numStays">{ stays.length > 12 ? '12+ stays' : `${stays.length} stays`}</h2>
      </div>
      <div className="listing-grid" >
        {stays && stays.length > 0 && stays.map((stay, index) => {
          
            return (
              <Col key={index} className="mb-5">
              <Stay title={stay.title} photo={stay.photo} beds={stay.beds} type={stay.type} rating={stay.rating} superHost />
              </Col>
            )
          })}
          {(!stays || stays.length === 0) && <h2 className="text-center"> No Stays Available </h2>}
      </div>
            
        </div>
    )
}
