import { useState } from 'react'
import './App.css'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  return (
    <>
      <h1>Products</h1>
      <CategoryList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  )
}

export default App
