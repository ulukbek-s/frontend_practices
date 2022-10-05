import React from "react"
import Navbar from "./NavBar"
import Hero from "./Hero"
import Card from './Card'
import data from './data'
function App() {
    const cards = data.map(item => {
        return (
            <Card
            img = {item.coverImg}
            rating = {item.stats.rating}
            review = {item.stats.reviewCount}
            location = {item.location}
            title = {item.title}
            price = {item.price}
            />
        )
    }
    )
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card-list">
                {cards}
            </section>
        </div>
    )
}

export default App