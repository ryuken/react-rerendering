import { useState } from "react"

let counter = 0

const Form = () => {

    const [naam, setNaam] = useState("")
    const [leeftijd, setLeeftijd] = useState("")

    const updateNaam = (e) => {
        setNaam(e.target.value)
    }

    const updateLeeftijd = (e) => {
        setLeeftijd(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log({naam, leeftijd})
    }

    counter++

    return (
        <div>
            <h1>Formulier (useState)</h1>

            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="naam">Naam</label>
                    <input id="naam" type="text" value={naam} onChange={updateNaam} />
                </p>

                <p>
                    <label htmlFor="leeftijd">Leeftijd</label>
                    <input id="leeftijd" type="number" value={leeftijd} onChange={updateLeeftijd} />
                </p>

                <button>Opslaan</button>
            </form>

            <h2>Counter: {counter}</h2>
        </div>
    )
}

export default Form