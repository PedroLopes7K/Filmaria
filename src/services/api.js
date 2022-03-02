import axios from 'axios'

// https://sujeitoprogramador.com/r-api/?api=filmes/

// base url https://sujeitoprogramador.com

// /r-api/?api=filmes/  (ROTA DE TODOS OS FILMES)

// /r-api/?api=filmes/123 (FILME COM ID 123)

const api = axios.create({
  baseURL: ' https://sujeitoprogramador.com/'
})

export default api
