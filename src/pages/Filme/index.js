import { useEffect, useState } from 'react'
import './filmes-info.css'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'
export default function Filme() {
  const { id } = useParams()
  const [filme, setFilme] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    async function loadFilme() {
      const resposta = await api.get(`r-api/?api=filmes/${id}`)

      if (resposta.data.length === 0) {
        //  tentou acessar com um id que não existe, e levado para a home
        alert('ERRO DE ROTA')
        navigate('/')
        //  navigate substitui o useHistory
        return
      }
      // console.log(resposta.data)
      setFilme(resposta.data)
      setLoading(false)
    }

    loadFilme()

    return () => {
      // alert('COMPONENTE DESMONTADO')
    }
  }, [navigate, id]) // o useEffact recebe o id pq caso o id mude ele precisa fazer uma nova requisição

  function salvaFilme() {
    const minhaLista = localStorage.getItem('filmes')
    let filmesSalvos = JSON.parse(minhaLista) || []
    // se já tiver um filme com mesmo id precisa ignorar
    const hasFilme = filmesSalvos.some(filmeSalvo => filmeSalvo.id === filme.id)
    if (hasFilme == true) {
      alert('voce ja salvou esse filme')
      return
      // para a execução do codigo aqui
    }

    filmesSalvos.push(filme)
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
    alert('filme salvo com sucesso')
  }

  if (loading == true) {
    return (
      <div className="filme-info">
        <h1>Carregando dados...</h1>
      </div>
    )
  }

  return (
    <div className="filme-info">
      {/* <h1>Pagina detalhes - {id}</h1> */}
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse:</h3>
      <p>{filme.sinopse}</p>

      <div className="botoes">
        <button onClick={salvaFilme}>Salvar</button>

        <button>
          <a
            href={`https://www.youtube.com/results?search_query=${filme.nome}+trailer`}
            target="_blank"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}
