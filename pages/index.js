import { useState } from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

const Index = () => {

    const [counter, setCounter] = useState(0)

    console.log("index")

    return (
        <div className="layout">
            <Header />

            <div className="content">
                <h1>Titel</h1>

                <p>{counter}</p>

                <button onClick={() => setCounter(counter+1)}>+</button>
            </div>

            <Footer />
        </div>
    )
}

export default Index