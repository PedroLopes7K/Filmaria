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
      console.log(respostaApi.data)
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
            <div className="container-filme" key={filmes.id}>
              <h1>{filmes.nome}</h1>
              <img src={filmes.foto} />
              <h4>Sinopse:</h4>
              <p className="sinopse">{filmes.sinopse}</p>
              <Link to="/"> Acessar</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
