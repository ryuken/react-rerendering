import { useForm } from "react-hook-form"

let counter = 0

const Form = () => {

    const { register, watch, handleSubmit } = useForm({
        defaultValues: {
            naam: "",
            leeftijd: ""
        }
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const naam = watch("naam")

    console.log({naam})

    counter++

    return (
        <div>
            <h1>Formulier (react-hook-form-watch)</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <label htmlFor="naam">Naam</label>
                    <input id="naam" type="text" {...register("naam")} />
                </p>

                <p>
                    <label htmlFor="leeftijd">Leeftijd</label>
                    <input id="leeftijd" type="number" {...register("leeftijd")} />
                </p>

                <button>Opslaan</button>
            </form>

            <h2>Counter: {counter}</h2>
        </div>
    )
}

export default Form