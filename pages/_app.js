import "../style.sass"

import { StoreProvider } from "../lib/store"

function MyApp({ Component, pageProps, }) {
    return (
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    )
}
  
export default MyApp