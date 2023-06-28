import { useStore } from "../lib/store"

const list = ["Aap", "Mies", "Noot", "Maan", "Roos", "Vis"]

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Context = () => {

    const { store, dispatch } = useStore()

    const changeTitle = () => dispatch({ type: "header.setTitle", title: list[random(0, list.length - 1)] })

    console.log("context")

    return (
        <div className="content">
            <h1>{store.header.title}</h1>

            <button onClick={changeTitle}>
                Update
            </button>
        </div>
    )
}

export default Context