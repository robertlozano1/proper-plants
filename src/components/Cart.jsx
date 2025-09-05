import CartItem from "./CartItem";

// 14: This is one of the separate components for cart functionality
export default function Cart({ cart, onUpdateQuantity }) {
  return (
    <div className={`cart ${cart.length > 0 ? "has-items" : ""}`}>
      {/* 9: Render a cart item for each plant the user has added */}
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))
      )}
    </div>
  );
}
