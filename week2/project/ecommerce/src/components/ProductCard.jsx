import { Link } from 'react-router-dom'

const ProductCard = ({ item }) => {
  return (
    <li key={item.id} className="products-item">
      <Link to={`/product/${item.id}`}>
        <div className="product">
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      </Link>
    </li>
  )
}

export default ProductCard
