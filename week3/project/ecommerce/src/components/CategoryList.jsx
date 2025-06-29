import useFetch from '../hooks/useFetch'

const CategoryList = ({ selectedCategory, setSelectedCategory }) => {
  const {
    data: categories,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products/categories')

  if (loading) return <p>Loading categories...</p>
  if (error) return <p>{error}</p>

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
