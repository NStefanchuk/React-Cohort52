import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useFavorites } from '../components/FavoritesContext'
import heart from '../assets/heart-regular.svg'
import heartFilled from '../assets/heart-solid.svg'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { favoriteIds, toggleFavorite } = useFavorites()
  const isFavourite = favoriteIds.includes(Number(id))

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!res.ok) throw new Error('Failed to fetch product')
        const data = await res.json()
        setProduct(data)
      } catch (e) {
        setError('Error loading product details')
      } finally {
        setLoading(false)
      }
    }
    getProduct()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!product) return null

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>
        <strong>${product.price}</strong>
      </p>
      <button
        onClick={() => toggleFavorite(product.id)}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-label="Toggle favourite"
      >
        <img
          src={isFavourite ? heartFilled : heart}
          alt={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
          width={32}
          height={32}
        />
      </button>
    </div>
  )
}

export default ProductDetail
