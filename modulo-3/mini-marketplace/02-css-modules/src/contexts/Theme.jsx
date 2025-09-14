import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

    useEffect(()=> {
        if(theme == 'dark') {
            document.body.style.backgroundColor = "#141414";
            document.body.style.color = "white";
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = "black";
            localStorage.setItem('theme', 'light')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const value = useMemo(() => ({theme, toggleTheme}), [theme])

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(){
    const  ctx = useContext(ThemeContext)
    if(!ctx) throw new Error("useTheme deve ser usado dentro de <ThemeProvider>")
    return ctx
}