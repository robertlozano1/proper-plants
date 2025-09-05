import PlantCard from "./PlantCard";

// 8: This is one of the separate components for plants functionality
export default function PlantList({ plants, onAddToCart }) {
  return (
    <div className="plant-grid">
      {/* 6: Display image and name of every plant in the array */}
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}
