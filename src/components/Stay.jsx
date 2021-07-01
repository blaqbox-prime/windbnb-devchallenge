import React from 'react'
import './Stay.css'
import StarRateIcon from '@material-ui/icons/StarRate'

export default function Stay({title, superHost, type, beds, photo, rating}) {
    return (
        <div className="stay__container">
            <img className="stay__image mb-3" src={photo} alt={title} />
            <div className="d-flex align-items-center detail-row justify-space-between">
            {/* Left */}
            <div className="d-flex align-items-center">
            {superHost && <div className="stay__super_host">super host</div>}
            <div className="stay__subtitle">
            { `${type}${ beds !== null ? `, ${beds} beds` : ""}`  }
            </div>
            </div>
            {/* Right */}
                <div className="stay__rating">
                    <StarRateIcon style={{color:"#EB5757", marginRight:"5px"}}/>
                    {rating}</div>
            </div>
            <div className="stay__title mt-2">
                {title}
            </div>
        </div>
    )
}
