import { useState } from "react"

const Header = ({ title }) => {

    console.log("header")

    return (
        <header>
            <div>Logo</div>

            <div className="ml-2">{title}</div>

            <Logout />
        </header>
    )
}

const Logout = () => {

    const [status, setStatus] = useState(1)

    console.log("Logout")

    return (
        <button onClick={() => setStatus(!status)}>
            {status === 0 ? "Inloggen" : "Uitloggen"}
        </button>
    )
}

export default Header