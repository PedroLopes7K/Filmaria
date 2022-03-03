import api from '../../services/api'
import { useEffect, useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Home() {
  // https://sujeitoprogramador.com/r-api/?api=filmes/
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    async function loadFilmes() {
      const respostaApi = await api.get('r-api/?api=filmes/')
      // console.log(respostaApi)
      // console.log(respostaApi.data)
      setFilmes(respostaApi.data)
    }

    loadFilmes()
  }, [])
  return (
    <div className="container">
      {/* <h1>Pagina Home</h1> */}
      <div className="lista-filmes">
        {filmes.map(filmes => {
          return (
            <article key={filmes.id}>
              <strong>{filmes.nome}</strong>
              <img src={filmes.foto} />
              <Link to={`/filme/${filmes.id}`}> Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home
