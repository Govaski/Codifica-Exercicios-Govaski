import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import FilmPage from './pages/FilmPage'
import RootLayout from './layouts/RootLayout'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Favorite from './pages/Favorites'
import Debug from './pages/Debug'
import SearchList from './pages/SearchList'
import { SearchListProvider, useSearchList } from './contexts/SearchList'

function App() {

  return (
    <>
    <SearchListProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='film/:id' element={<FilmPage/>}/>
            <Route path='favorites' element={<Favorite/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='debug' element={<Debug/>}/>
            <Route path='search' element={<SearchList/>}/>
            <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchListProvider>
    </>
  )
}

export default App
