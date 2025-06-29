import categories from '../fake-data/all-categories'

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-list">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setSelectedCategory(item)}
          className={`category-item ${
            selectedCategory === item ? 'active' : ''
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default CategoryList
