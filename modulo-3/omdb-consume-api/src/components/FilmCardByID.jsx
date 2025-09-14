import React, { Suspense, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useSearchList } from "../contexts/SearchList"
import omdbService from "../services/omdbService"

function FilmCard (props) {
    const [loading, setLoading] = useState(true)

    const filmCardStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "1em 2em 0em 2em",
        height: parseInt(props.size)*2,
    }

    const [film, setFilm] = useState(async () => {
        let f = await omdbService.getFilmById(props.film)
        setFilm(f)
    })

    useEffect(() => {
        if(film){
            setLoading(false)
        }
    }, [film])

    return (
        <>
        {
        loading ? <p>Loading</p> :
        <Link style={filmCardStyle} to={"/film/"+ film.imdbID} replace>
            <h3 style={{marginBottom: '.5em'}} >{film.Title} ({film.Year})</h3>
            <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
                <img style={{width:props.size}} src={film.Poster}/>
            </div>
        </Link>
        }
        </>
    )
}

export default FilmCard