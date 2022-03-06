import React from 'react'
import './index.css'
export default function NotFound() {
  return (
    <div className="error">
      <h1 className="codigo">404</h1>
      <h1 className="notfound">NOT FOUND</h1>
      <strong>Essa rota não existe!</strong>
    </div>
  )
}
