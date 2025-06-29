import { useEffect, useState } from 'react'
import { useFavorites } from '../components/FavoritesContext'
import ProductCard from './ProductCard'

const FavouritesPage = () => {
  const { favoriteIds } = useFavorites()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFavourites = async () => {
      setLoading(true)
      try {
        const productPromises = favoriteIds.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        )
        const products = await Promise.all(productPromises)
        setProducts(products)
      } catch (e) {
        console.error(e)
        setError('Failed to load favourites')
      } finally {
        setLoading(false)
      }
    }

    if (favoriteIds.length > 0) {
      fetchFavourites()
    } else {
      setProducts([])
      setLoading(false)
    }
  }, [favoriteIds])

  if (loading) return <p>Loading favourites...</p>
  if (error) return <p>{error}</p>
  if (products.length === 0) return <p>No favourites yet ❤️</p>

  return (
    <div>
      <h2>Your Favourites</h2>
      <ul className="products">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default FavouritesPage
