import { Link } from "react-router-dom"
import { CiLight, CiDark } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import {useTheme} from '../../contexts/Theme'
import { useEffect } from "react";

export default function Header(){
    const {theme, toggleTheme} = useTheme()

    return (
        <header className="flex justify-between border-b-1 border-stone-500">
            <nav className="flex items-center justify-center gap-2">
                
                <Link to='/'>
                    <img className="w-15"
                    src="src\assets\logo.svg" alt="logo" />
                </Link>
                <Link to='/'>Loja</Link>
                <Link to='/'>Categorias</Link>
                <Link to='/'>Contato</Link>
                <Link to='/about'>Sobre</Link>
            </nav>
            <div className="flex items-center gap-2">
                <button onClick={toggleTheme} className="text-2xl">
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