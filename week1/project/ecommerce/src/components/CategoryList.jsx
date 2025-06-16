import React from 'react'
import { useState } from 'react'
import categories from '../fake-data/all-categories'

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  console.log('selected:', selectedCategory)
  return (
    <div className="category-list">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedCategory(item)}
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
