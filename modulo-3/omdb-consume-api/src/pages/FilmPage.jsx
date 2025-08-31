import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import omdbService from "../services/omdbService"
import { useSearchList } from "../contexts/SearchList"
import { Link } from "react-router-dom"
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function FilmPage() {
    const { id } = useParams()
    const [film, setFilm] = useState({}) 
    const { searchList, setSearchList} = useSearchList()
    const filmListId = searchList.map(e => e.imdbID).indexOf(film.imdbID)

    const [favorites, setFavorites] = useState(()=> {
        const ls = localStorage.getItem("favs");
        if (ls) return JSON.parse(ls);
        else return [];
    })
    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favorites))
    }, [favorites])


    const fnFav = () => {
        const isFav = favorites.includes(id);
        if (isFav) setFavorites((prev) => prev.filter((b) => b !== id));
        else setFavorites((prev) => [...prev, id]);
    }


    useEffect(() => {
        omdbService.getFilmById(id).then(_film => setFilm(_film))
        console.log(id)
    }, [])

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        border: '1px solid black'
    }

    const infoStyle = {
        width: '50%',
        border: '1px solid black'
    }
    
    const navigate = useNavigate()
    const nextPage = async () => {
        if ((filmListId + 1) < searchList.length) {
            const film = await omdbService.getFilmById(searchList[filmListId+1].imdbID)
            navigate('/film/'+ film.imdbID)
            setFilm(film)
        }
    }

    const prevPage = async () => {
        if ((filmListId - 1) > -1) {
            const film = await omdbService.getFilmById(searchList[filmListId-1].imdbID)
            navigate('/film/'+ film.imdbID)
            setFilm(film)
        }
    }

    return (
        <section style={sectionStyle}>
            <h1>{film.Title} ({film.Year})</h1>
            <img src={film.Poster} />

            <section style={infoStyle}>
                <p>Diretor: {film.Director}</p>
                <p>Elenco: {film.Actors}</p>
                <p>Sinopse: {film.Plot}</p>
                <p>Avaliação: {film.imdbRating}</p>
            </section>
            
            <button style={{background: 'none', fontSize: '1.5rem'}} onClick={fnFav}>{favorites.includes(id) ? <FaHeart style={{color: "red"}}/> : <FaRegHeart/>}</button>

            <button style={{position: "absolute", left: "90%", top: "50%", background: "none", color: "white", fontSize: "1.5rem"}} onClick={nextPage}><GrLinkNext /></button>
            <button style={{position: "absolute", left: "10%", top: "50%", background: "none", color: "white", fontSize: "1.5rem"}} onClick={prevPage}><GrLinkPrevious/></button>

        </section>
    )
}

export default FilmPage