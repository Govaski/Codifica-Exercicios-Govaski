import { Link } from "react-router-dom"
import { CiLight, CiDark } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import {useTheme} from '../../contexts/Theme'
import { useEffect } from "react";

export default function Header(){
    const {theme, toggleTheme, themeStyle} = useTheme()

    const header = {
        borderBottom: "1px lightgray solid",
        backgroundColor: themeStyle.bg,
        color: themeStyle.fg,
        
        padding: "1em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        height: "50px",
        zIndex: 999
    }

    const headerNav = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em"
    }

    const rightHeader = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em"
    }

    const themeSelectorLight = {
    fontSize: "2em",
    background: "transparent",
    border: "none",
    display: "flex",
    }

    const themeSelectorDark = {
        fontSize: "2em",
        background: "transparent",
        border: "none",
        display: "flex",
        color: "white"
    }

    const link = {
        textDecoration: "none",
        color: themeStyle.fg
    }
    return (
        <header style={header}>
            <nav style={headerNav}>
                <Link to='/' style={link}>
                    <img style={{width: "60px"}} src="src\assets\logo.svg" alt="logo" />
                </Link>
                <Link to='/' style={link}>Loja</Link>
                <Link to='/' style={link}>Categorias</Link>
                <Link to='/' style={link}>Contato</Link>
                <Link to='/about' style={link}>Sobre</Link>
            </nav>
            <div style={rightHeader}>
                <button onClick={toggleTheme} style={theme == 'light' ? themeSelectorLight : themeSelectorDark }>
                    {
                        theme == 'dark' ? <CiLight/> : <CiDark/>
                    }
                </button>

                <FaShoppingCart/>
                <input style={{padding: ".25em"}} placeholder="Pesquisar" />
            </div>
        </header>
    )
}