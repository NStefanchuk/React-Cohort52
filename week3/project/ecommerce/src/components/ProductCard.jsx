import { Link } from 'react-router-dom'
import { useFavorites } from '../components/FavoritesContext'
import heart from '../assets/heart-regular.svg'
import heartFilled from '../assets/heart-solid.svg'

const ProductCard = ({ item }) => {
  const { favoriteIds, toggleFavorite } = useFavorites()
  const isFavourite = favoriteIds.includes(item.id)

  return (
    <li className="products-item">
      <button
        className="fav-btn"
        onClick={() => toggleFavorite(item.id)}
        aria-label="Toggle favourite"
      >
        <img
          src={isFavourite ? heartFilled : heart}
          alt={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
        />
      </button>
      <div className="product">
        <Link to={`/product/${item.id}`}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </Link>
      </div>
    </li>
  )
}

export default ProductCard
