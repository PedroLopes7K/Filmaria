import './style.css'
import Rotas from './rotas'
import 'react-toastify/dist/ReactToastify.css'
// css padrao da biblioteca
import { ToastContainer } from 'react-toastify'
function App() {
  // https://sujeitoprogramador.com/r-api/?api=filmes/
  return (
    <div className="app">
      <Rotas />
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default App
