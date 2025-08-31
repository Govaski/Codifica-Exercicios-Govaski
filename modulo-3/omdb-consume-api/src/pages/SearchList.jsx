import { useEffect } from "react"
import { useSearchList } from "../contexts/SearchList"
import FilmCard from "../components/FilmCard"

export default function SearchList(){
    const { searchList, setSearchList } = useSearchList()

    return (
        <>
        {
            searchList.map(film => (
                <div key={film.imdbID}>
                    <FilmCard film={film} />
                </div>
            ))
        }
        </>
    )
}