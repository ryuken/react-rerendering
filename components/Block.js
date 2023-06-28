import { useState } from "react"

const Block = ({ title, random }) => {

    console.log("block")

    return (
        <div className="content">
            <h1>{title}</h1>

            <Counter random={random} />
        </div>
    )
}

const Counter = ({ random }) => {

    const [counter, setCounter] = useState(0)

    console.log("counter")

    return (
        <div className="block">
            <p className="counter">{counter}</p>

            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={random}>Random</button>
        </div>
    )
}

export default Block