import React from 'react'

const ProductCard = ({ item }) => {
  return (
    <li key={item.id} className="products-item">
      <div className="product">
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
      </div>
    </li>
  )
}

export default ProductCard
