import { useEffect, useState } from 'react'
import './filmes-info.css'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
export default function Filme() {
  const { id } = useParams()
  const [filme, setFilme] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme() {
      const resposta = await api.get(`r-api/?api=filmes/${id}`)
      // console.log(resposta.data)
      setFilme(resposta.data)
      setLoading(false)
    }

    loadFilme()
  }, [id]) // o useEffact recebe o id pq caso o id mude ele precisa fazer uma nova requisição

  if (loading == true) {
    return (
      <div>
        <h1>Carregando dados...</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>Pagina detalhes - {id}</h1>
    </div>
  )
}
