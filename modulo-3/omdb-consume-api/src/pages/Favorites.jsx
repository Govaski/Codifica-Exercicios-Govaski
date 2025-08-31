import { Suspense, useEffect, useState } from "react"
import FilmCardByID from '../components/FilmCardByID'
import omdbService from "../services/omdbService"

export default function Favorites() {
    const [favorites, setFavorites] = useState(() => {
        const ls = localStorage.getItem("favs");
        if (ls) return JSON.parse(ls);
        else return [];
    })
    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favorites))
    }, [favorites])

    const favSectionStyle = {
        display: 'grid',
        gridTemplateColumns: '350px 350px'
    }

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Favoritos</h1>
            
            <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
            <section style={favSectionStyle}>
            {
                favorites.map(id => {
                    return <div key={id}>
                        <FilmCardByID size="300px" film={id}/>
                    </div> 
                })
            } 
            </section>
            </div>
        </>
    )
}