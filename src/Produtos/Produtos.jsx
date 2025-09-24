import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Item from "./Item"

export default function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProdutos(json)
        setLoading(false)
      })
  }, [])

  return (
    <div className="produtos-grid">
      {loading && <p className="loading-text">Carregando...</p>}
      {!loading && produtos.map(produto => (
        <Link key={produto.id} to={`/${produto.id}`} className="link-item">
          <Item
            imagem={produto.image}
            nome={produto.title}
            preco={produto.price}
            category={produto.category}
          />
        </Link>
      ))}
    </div>
  )
}