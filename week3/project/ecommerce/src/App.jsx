import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
import FavouritesPage from './components/FavouritesPage'
import { FavoritesProvider } from './components/FavoritesContext'

function App() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <FavoritesProvider>
      <Router>
        <header>
          <h1>Products</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
          </nav>
        </header>

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
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  )
}

export default App
