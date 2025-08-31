import React from 'react'
import FilmCarousel from '../components/FilmCarousel'

export default function Debug() {
    const filmList = ["tt0120737", "tt0167261", "tt0088763", "tt13339668", "tt0120737", "tt0167261", "tt0088763", "tt13339668"]

    return (
        <>
        <h1>DEBUG PAGE</h1>
        <FilmCarousel size="200px" films={filmList} />
        </>
    )
}