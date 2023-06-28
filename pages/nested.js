import { useState } from "react"

import Header from "../components/Header"
import Block from "../components/Block"
import Footer from "../components/Footer"

const titles = ["Aap", "Mies", "Noot"]

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Index = () => {

    console.log("index")

    const [title, setTitle] = useState(titles[0])

    const randomTitle = () => {
        setTitle(titles[random(0, titles.length-1)])
    }

    return (
        <div className="layout">
            <Header />

            <Block title={title} random={randomTitle} />

            <Footer />
        </div>
    )
}

export default Index