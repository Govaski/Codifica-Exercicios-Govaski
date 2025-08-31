import { useState, useEffect } from "react"
import '../styles/index.css'
import omdbService from "../services/omdbService"
import { useSearchList } from "../contexts/SearchList"
import FilmCarousel from '../components/FilmCarousel'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { searchList, setSearchList } = useSearchList()
  const [title, setTitle] = useState('')

  const navigate = useNavigate();

  const getFilms = async (title) => {
    let films = await omdbService.getAllFilms(title)
    setSearchList(films)
    navigate('/search')
  }

  const filmInputStyle = {
    padding: '0.25rem',
    border: 0,
    width: "25vw",
  }

  const btnStyle = {
    padding: '0.25rem',
    border: 0,
    borderRadius: '8px'
  }

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5em',
    marginTop: '1em',
  }

  const filmList = ["tt0120737", "tt0167261", "tt0167260", "tt0088763", "tt0096874", "tt0099088", "tt0816692"]
  const animeList = ["tt0213338", "tt0251439", "tt0193253", "tt2098220", "tt12987648", "tt0121220"]

  return (
    <section>
      <div style={searchContainerStyle}>
        <input placeholder="Pesquisar" style={filmInputStyle} type="text" value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={(e) => {e.key === 'Enter' ? getFilms(title) : null}}/>
        <button style={btnStyle} onClick={() => getFilms(title)}>Pesquisar</button>
      </div>

      <section>

        <FilmCarousel title="Filmes" size="200px" films={filmList}/>
        <FilmCarousel title="Animes" size="200px" films={animeList}/>

      </section>
    </section>
  )
} 