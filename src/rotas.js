import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
