import Header from "../components/Header"
import Context from "../components/Context"
import Footer from "../components/Footer"

import { useStore } from "../lib/store"

const Index = () => {

    const {store} = useStore()

    console.log("index")

    return (
        <div className="layout">
            <Header title={store.header.title} />

            <Context />

            <Footer />
        </div>
    )
}

export default Index