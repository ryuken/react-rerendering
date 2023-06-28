import React, { createContext, useContext, useReducer } from "react"

const StoreContext = createContext()

function storeReducer(state, action) {

    switch (action.type) {
        case "header.setTitle": {

            let header = { ...state.header }
            header.title = action.title

            return { ...state, header }
        }
        case "alert.success": {

            let alert = { ...state.alert }
            alert.status = "success"
            alert.message = action.message

            return { ...state, alert }
        }
        case "alert.error": {

            let alert = { ...state.alert }
            alert.status = "error"
            alert.message = action.message

            return { ...state, alert }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function StoreProvider({ children }) {

    const [ state, dispatch ] = useReducer(storeReducer, {
        header: {
            title: "Test applicatie",
        },
        alert: {
            status: "",
            message: ""
        }
    })

    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = { store: state, dispatch }

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

function useStore() {

    const context = useContext(StoreContext)

    if (context === undefined) {
        throw new Error("useStore must be used within a StoreProvider")
    }
  
    return context
}

export { StoreProvider, useStore }