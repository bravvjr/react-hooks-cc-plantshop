// import React from "react";

// function PlantCard() {
//   return (
//     <li className="card" data-testid="plant-item">
//       <img src={"https://via.placeholder.com/400"} alt={"plant name"} />
//       <h4>{"plant name"}</h4>
//       <p>Price: {"plant price"}</p>
//       {true ? (
//         <button className="primary">In Stock</button>
//       ) : (
//         <button>Out of Stock</button>
//       )}
//     </li>
//   );
// }

// export default PlantCard;

// PlantCard.js
import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleSoldOutClick() {
    setIsSoldOut(!isSoldOut);
  }

  return (
    // <li className={isSoldOut ? "sold-out" : ""}>
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button
        className={isSoldOut ? "primary sold-out" : "primary"}
        onClick={handleSoldOutClick}
      >
        {isSoldOut ? "Sold Out" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
