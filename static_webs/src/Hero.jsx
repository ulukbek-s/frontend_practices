import React from "react"
import pictOfHero from './assets/collections-slide.png'
function Hero() {
    return (
        <section className="hero">
            <img src={pictOfHero} className="hero-img"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero
