const getAllFilms = async (title) => {
    let res = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=9518bd07&json`)
    let obj = await res.json()

    let films = obj.Search
    films = films.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))
    return films
}

const getFilmById = async (id) => {
    let res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=9518bd07&json`)
    let obj = await res.json()
    return obj
}

const fetchFavs = async (id) => {
    let a = []
    id.map(async (f) => {
        let g = await getFilmById(f)
        a.push(g)
    })

    return a
}

export default { getAllFilms, getFilmById, fetchFavs }