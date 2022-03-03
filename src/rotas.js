import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import Filme from './pages/Filme'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
