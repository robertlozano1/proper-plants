// Requirement 14: This is the second separate component for cart functionality
export default function CartItem({ item, onUpdateQuantity }) {
  // Handler for decrementing quantity
  const handleDecrement = () => {
    // Requirement 12: One button decrements the quantity
    // Requirement 13: If quantity becomes 0 or below, item will be removed (handled in App)
    onUpdateQuantity(item.id, item.quantity - 1);
  };

  // Handler for incrementing quantity
  const handleIncrement = () => {
    // Requirement 12: Other button increments the quantity
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="cart-item">
      {/* Left side: emoji and name */}
      <div className="cart-item-left">
        <span className="cart-item-image">{item.image}</span>
        <span className="cart-item-name">{item.name}</span>
      </div>

      {/* Right side: quantity controls in order: - [quantity] + */}
      <div className="cart-item-controls">
        <button className="quantity-btn decrement" onClick={handleDecrement}>
          -
        </button>

        <span className="quantity">{item.quantity}</span>

        <button className="quantity-btn increment" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}
