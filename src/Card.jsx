import React from "react"
import star from './assets/Red_star.png'
export default function Card(props) {

    return (
        <div className="card">
            <img src={props.img} className="card-image"/>
            <div className="card-stats">
                <img src={star} className="card-star" />
                <span>{props.rating}</span>
                <span className="amount">({props.review}) • </span>                
                <span className="country">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="price">from ${props.price}</span> / person</p>
        </div>
    )
}