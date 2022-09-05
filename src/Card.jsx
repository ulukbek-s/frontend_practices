import React from "react"
import firstPerson from './assets/better-people-photos.jpg'
import star from './assets/Red_star.png'
export default function Card() {
    return (
        <div className="card">
            <img src={firstPerson} className="card-image"/>
            <div className="card-stats">
                <img src={star} className="card-star" />
                <span>5.0</span>
                <span className="amount">(6) • </span>                
                <span className="country">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="price">From $136</span> / person</p>
        </div>
    )
}