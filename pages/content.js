import Header from "../components/Header"
import Content from "../components/Content"
import Footer from "../components/Footer"

const Index = () => {

    console.log("index")

    return (
        <div className="layout">
            <Header />

            <Content />

            <Footer />
        </div>
    )
}

export default Index