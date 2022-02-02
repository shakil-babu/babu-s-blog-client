import { createContext, useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export const darkmodeContext = createContext();
export const AuthContext = createContext();

const Layout = (props) => {
    const [darkmode, setDarkmode] = useState(false);
    const [user, setUser] = useState(null);

    return (
        <>
            <AuthContext.Provider value={[user, setUser]}>
            <darkmodeContext.Provider value={[darkmode, setDarkmode]}>
                <section className={darkmode ? 'darkBg':'lightBg'}>
                <Navbar/>
                {props?.children}
                <Footer/>
                </section>
            </darkmodeContext.Provider>
            </AuthContext.Provider>
           
        </>
    )
}

export default Layout ;



  