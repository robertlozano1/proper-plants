import { useState } from "react";
import PLANTS from "./data.js";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

export default function App() {
  // 3: Cart is managed as a state variable in <App>
  const [cart, setCart] = useState([]);

  // 4 & 5: Functions to add/remove items from cart, using array methods to avoid mutation
  const addToCart = (plant) => {
    setCart((currentCart) => {
      // Check if the plant is already in the cart
      const existingItem = currentCart.find((item) => item.id === plant.id);

      if (existingItem) {
        // 7: If plant is already in cart, increase quantity by 1
        // Using map to create a new array (no mutation)
        return currentCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // 7: If plant is not in cart, add it with quantity of 1
        // Using spread operator to create new array (no mutation)
        return [...currentCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (plantId, newQuantity) => {
    setCart((currentCart) => {
      // 13: If quantity is 0 or below, remove item from cart
      if (newQuantity <= 0) {
        // Using filter to create new array without the item (no mutation)
        return currentCart.filter((item) => item.id !== plantId);
      }

      // Using map to create new array with updated quantity (no mutation)
      return currentCart.map((item) =>
        item.id === plantId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  return (
    <div className="app">
      <h1>Proper Plants</h1>

      <div className="main-container">
        {/* 6 & 8: Display all plants, organized in separate components */}
        <div className="plants-section">
          <h2>Plants</h2>
          <PlantList plants={PLANTS} onAddToCart={addToCart} />
        </div>

        {/* 9 & 14: Cart renders cart items, organized in separate components */}
        <div className="cart-section">
          <h2>Cart</h2>
          <Cart cart={cart} onUpdateQuantity={updateQuantity} />
        </div>
      </div>
    </div>
  );
}
