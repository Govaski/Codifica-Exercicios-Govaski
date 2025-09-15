import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import About from './pages/about/About'
import {ThemeProvider} from './contexts/Theme'
import './app/styles/global.css'

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  )
}

export default App
