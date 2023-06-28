import Header from "../components/Header"
import Footer from "../components/Footer"

import { useStore } from "../lib/store"

const list = ["Aap", "Mies", "Noot", "Maan", "Roos", "Vis"]

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const Index = () => {

    const {store, dispatch} = useStore()

    console.log("index")

    const changeTitle = () => dispatch({ type: "header.setTitle", title: list[random(0, list.length - 1)] })

    return (
        <div className="layout">
            <Header title={store.header.title} />

            <div className="content">
                <h1>{store.header.title}</h1>

                <button onClick={changeTitle}>
                    Update
                </button>
            </div>

            <Footer />
        </div>
    )
}

export default Index