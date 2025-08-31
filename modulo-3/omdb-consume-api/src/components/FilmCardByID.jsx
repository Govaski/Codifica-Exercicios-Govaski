import React, { Suspense, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useSearchList } from "../contexts/SearchList"
import omdbService from "../services/omdbService"

// const filmCardStyle = {
//     display: 'grid',
//     gridTemplateRows: '4em 1fr',
//     backgroundColor: 'gray',
// }

function FilmCard (props) {
    const filmCardStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "1em 2em 0em 2em",
        height: parseInt(props.size)*2,
        // backgroundColor: 'gray'
    }



    const [film, setFilm] = useState(async () => {
        let f = await omdbService.getFilmById(props.film)
        setFilm(f)
    })

    return (
        <Link style={filmCardStyle} to={"/film/"+ film.imdbID} replace>
            <h3 style={{marginBottom: '.5em'}} >{film.Title} ({film.Year})</h3>
            <div style={{display:'flex', alignItems:'center', justifyContent: 'center'}}>
                <img style={{width:props.size}} src={film.Poster}/>
            </div>
        </Link>
    )
}

export default FilmCard