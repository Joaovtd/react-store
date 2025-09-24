export default function Item({ imagem, nome, preco, category }) {
    return (
        <div className="item-card">
            <p className="item-price">{category}</p>
            <img src={imagem} alt={nome} className="item-image" />
            <h2 className="item-title">{nome}</h2>
            <p className="item-price">R$ {preco}</p>
            <button className="btn-primary">Adicionar ao Cart</button>
        </div>
    )
}
