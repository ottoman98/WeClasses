import { useState } from "react";
const TouchExample = () => {
  // Estado para almacenar el color actual del div
  const [color, setColor] = useState("blue");

  // Función para cambiar el color cuando se toca el div
  const handleTouch = () => {
    // Cambiar el color a un nuevo valor
    const newColor = color === "blue" ? "red" : "blue";
    setColor(newColor);
  };

  return (
    <div
      onTouchStart={handleTouch} // Manejar el evento onTouchStart
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <p>¡Toque para cambiar el color!</p>
    </div>
  );
};

export default TouchExample;
