import { createContext, useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export const darkmodeContext = createContext();
export const AuthContext = createContext();

const Layout = ({children}) => {
    const [darkmode, setDarkmode] = useState(false);
    const [user, setUser] = useState(null);

    try{
        return (
            <>
                <AuthContext.Provider value={[user, setUser]}>
                <darkmodeContext.Provider value={[darkmode, setDarkmode]}>
                    <section className={darkmode ? 'darkBg':'lightBg'}>
                    <Navbar/>
                    {children?children:''}
                    <Footer/>
                    </section>
                </darkmodeContext.Provider>
                </AuthContext.Provider>
               
            </>
        )
    } catch(e){
        return null; 
    }
}

export default Layout ;



  