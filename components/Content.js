import { useState } from "react"

const Content = () => {

    const [counter, setCounter] = useState(0)

    console.log("content")

    return (
        <div className="content">
            <h1>Titel</h1>

            <p className="counter">{counter}</p>

            <button onClick={() => setCounter(counter+1)}>+</button>
        </div>
    )
}

export default Content