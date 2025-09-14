import { Link } from "react-router-dom"
import styles from './Header.module.css'
import { CiLight, CiDark } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import {useTheme} from '../../contexts/Theme'
import { useEffect } from "react";

export default function Header(){
    const {theme, toggleTheme} = useTheme()

    return (
        <header className={`${styles.header} ${theme == 'light' ? styles.headerLight : styles.headerDark}`}>
            <nav>
                
                <Link to='/' className={theme == 'light' ? styles.LinkLight : styles.LinkDark}>
                    <img className={styles.icon} src="src\assets\logo.svg" alt="logo" />
                </Link>
                <Link to='/' className={theme == 'light' ? styles.LinkLight : styles.LinkDark}>Loja</Link>
                <Link to='/' className={theme == 'light' ? styles.LinkLight : styles.LinkDark}>Categorias</Link>
                <Link to='/' className={theme == 'light' ? styles.LinkLight : styles.LinkDark}>Contato</Link>
                <Link to='/about' className={theme == 'light' ? styles.LinkLight : styles.LinkDark}>Sobre</Link>
            </nav>
            <div className={styles.rightHeader}>
                <button onClick={toggleTheme} className={theme == 'light' ?styles.themeSelectorLight :styles.themeSelectorDark}>
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