import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Produto() {
  const { id } = useParams()
  const [produto, setProduto] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduto(json))
  }, [id])

  return (
    <div className="produto-container">
      {!produto && <p className="loading-text">Carregando...</p>}
      {produto && (
        <div className="produto-card">
          <h2 className="produto-title">{produto.title}</h2>
          <br />
          <img src={produto.image} alt={produto.title} className="produto-image" />
          <p className="produto-price">{produto.category}</p>
          <p className="produto-price">R$ {produto.price}</p>
          <p className="produto-description">{produto.description}</p>
          <button className="btn-primary">Adquirir</button>
        </div>
      )}
    </div>
  )
}