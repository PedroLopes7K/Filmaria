import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './favoritos.css'

export default function Favoritos() {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhalista = localStorage.getItem('filmes')

    setFilmes(JSON.parse(minhalista) || [])
  }, [])
  function excluirFilme(id) {
    let filtroFilmes = filmes.filter(filme => {
      return filme.id !== id
    })
    setFilmes(filtroFilmes)
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
  }

  return (
    <div id="meus-filmes">
      <h1>Meus Filmes</h1>
      {filmes.length === 0 && (
        <span>Você não possui nenhum filme salvo! :( </span>
      )}
      <ul>
        {filmes.map(filme => {
          return (
            <li key={filme.id}>
              <span>{filme.nome}</span>

              <div>
                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                {/* quando a função recebe parametro em react ela precisa estar depois de uma função anonima */}
                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
