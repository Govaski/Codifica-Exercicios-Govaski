import React from "react"
import { Link } from 'react-router-dom'
import { useSearchList } from "../contexts/SearchList"

const filmCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em'
}

function FilmCard (props) {

    return (
        <Link style={filmCardStyle} to={"/film/"+ props.film.imdbID} replace>
            <h3>{props.film.Title} ({props.film.Year})</h3>
            <img src={props.film.Poster}/>
        </Link>
    )
}

export default FilmCard