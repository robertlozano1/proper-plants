// Requirement 8: This is the second separate component for plants functionality
export default function PlantCard({ plant, onAddToCart }) {
  // Handler function that calls the parent's addToCart function
  const handleAddToCart = () => {
    onAddToCart(plant);
  };

  return (
    <div className="plant-card">
      {/* Requirement 6: Show the image (emoji) and name of the plant */}
      <div className="plant-image">{plant.image}</div>

      <div className="plant-name">{plant.name}</div>

      {/* Requirement 7: Add to cart button with smart behavior */}
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
}
