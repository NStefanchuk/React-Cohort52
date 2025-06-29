import products from '../fake-data/all-products'
import ProductCard from './ProductCard'

const ProductList = ({ selectedCategory }) => {
  return (
    <div>
      <ul className="products">
        {products
          .filter(
            (filtredItem) =>
              filtredItem.category === selectedCategory.slice(6) ||
              !selectedCategory
          )
          .map((item) => (
            <li key={item.id} className="products-item">
              <ProductCard item={item} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ProductList
