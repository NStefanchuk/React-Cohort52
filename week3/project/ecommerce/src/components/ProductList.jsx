import useFetch from '../hooks/useFetch'
import ProductCard from './ProductCard'

const ProductList = ({ selectedCategory, setProducts }) => {
  const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : `https://fakestoreapi.com/products`

  const { data: products, loading, error } = useFetch(url)

  if (loading) return <p>Loading products...</p>
  if (error) return <p>{error}</p>
  if (!products) return null

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
