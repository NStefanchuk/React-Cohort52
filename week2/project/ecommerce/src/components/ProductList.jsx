import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({
  selectedCategory,
  setSelectedCategory,
  products,
  setProducts,
}) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  if (loading) return <p>Loading products...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <ul className="products">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
