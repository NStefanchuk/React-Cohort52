import React, { useState, useEffect } from 'react'

const CategoryList = ({ selectedCategory, setSelectedCategory, setProducts }) => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories')
        if (!res.ok) throw new Error('Failed to fetch categories')
        const data = await res.json()
        setCategories(data)
      } catch (e) {
        console.log(e)
        setError('Error loading categories')
      } finally {
        setLoading(false)
      }
    }
    getCategories()
  }, [])

  const getProductsByCategorie = async (categorie) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/category/${categorie}`)
      const data = await res.json()
      setSelectedCategory(categorie)
      setProducts(data)
    } catch (e) {
      console.log(e)
    }
  }

  if (loading) return <p>Loading categories...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="category-list">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => getProductsByCategorie(item)}
          className={`${
            selectedCategory === item ? 'category-item active' : 'category-item'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default CategoryList
