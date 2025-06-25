import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

function App() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <Router>
      <h1>Products</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CategoryList
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setProducts={setProducts}
              />
              <ProductList
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                products={products}
                setProducts={setProducts}
              />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
