const ProductCard = ({ item }) => {
  return (
    <div className="product">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
    </div>
  )
}

export default ProductCard
