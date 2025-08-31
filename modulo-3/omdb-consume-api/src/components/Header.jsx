import { useState } from "react";
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import '../styles/index.css'
import omdbService from "../services/omdbService";
import { useSearchList } from "../contexts/SearchList";

function Header() {
    const { searchList, setSearchList } = useSearchList()
    const [title, setTitle] = useState('')

    const navigate = useNavigate()

    const getFilms = async (title) => {
        let films = await omdbService.getAllFilms(title)
        setSearchList(films)
        navigate('/search')
    }

    const headerStyle = {
        padding: '0.5rem',
        display: 'flex',
        gap: '1rem',
        borderBottom: '1px solid var(--primary-color)',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

    const filmInputStyle = {
      padding: '0.25rem',
      margin: '.5rem',
      border: 0
    }

    const buttonStyle = {
        position: 'relative',
        right: '29px'
    }

    return (
    <>
    <header style={headerStyle}>
        <nav style={{display:'flex', gap:'1rem'}}>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/favorites'>Favoritos</NavLink>
            <NavLink to='/about'>Sobre</NavLink>
        </nav>
        <div>   
            <input style={filmInputStyle} placeholder="Pesquisar" type="text" value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={(e) => {e.key === 'Enter' ? getFilms(title) : null}}/>
            <button onClick={() => getFilms(title)} style={buttonStyle}><CiSearch style={{color: "black", background: "transparent"}}/></button>
        </div>
    </header>
    </>)
}

export default Header