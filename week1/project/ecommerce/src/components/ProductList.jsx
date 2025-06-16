import React from 'react'
import products from '../fake-data/all-products'
import ProductCard from './ProductCard'

const ProductList = ({ selectedCategory, setSelectedCategory }) => {
  console.log(selectedCategory)
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
            <ProductCard item={item} />
          ))}
      </ul>
    </div>
  )
}

export default ProductList
