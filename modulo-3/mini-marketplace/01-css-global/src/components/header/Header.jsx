import { Link } from "react-router-dom"
import { CiLight, CiDark } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import {useTheme} from '../../contexts/Theme'
import { useEffect } from "react";

export default function Header(){
    const {theme, toggleTheme} = useTheme()

    return (
        <header className={`${"header"} ${theme == 'dark' ? "headerDark" : "headerLight"}`}>
            <nav>
                
                <Link to='/' className="icon">
                    <img className="icon" src="src\assets\logo.svg" alt="logo" />
                </Link>
                <Link to='/' className={theme == 'dark' ? "LinkDark" : "LinkLight"}>Loja</Link>
                <Link to='/' className={theme == 'dark' ? "LinkDark" : "LinkLight"}>Categorias</Link>
                <Link to='/' className={theme == 'dark' ? "LinkDark" : "LinkLight"}>Contato</Link>
                <Link to='/about' className={theme == 'dark' ? "LinkDark" : "LinkLight"}>Sobre</Link>
            </nav>
            <div className="rightHeader">
                <button onClick={toggleTheme} className={theme == 'dark' ? "themeSelectorDark" : "themeSelectorLight"}>
                    {
                        theme == 'dark' ? <CiLight/> : <CiDark/>
                    }
                </button>

                <FaShoppingCart/>
                <input placeholder="Pesquisar" />
            </div>
        </header>
    )
}