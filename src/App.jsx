import React, { useState } from "react";

const Matrix = () => {
  const [grid, setGrid] = useState(Array(9).fill("white"));
  const [numbers, setNumbers] = useState(Array(9).fill(null));
  const [clickOrder, setClickOrder] = useState([]);
  const [counter, setCounter] = useState(1);

  const handleClick = (index) => {
    if (grid[index] === "white" && counter <= 9) {
      let newGrid = [...grid];
      newGrid[index] = "green";
      setGrid(newGrid);

      let newNumbers = [...numbers];
      newNumbers[index] = counter;
      setNumbers(newNumbers);

      setClickOrder([...clickOrder, index]);
      setCounter(counter + 1);
    }

    if (clickOrder.length === 8) {
      animateToOrange([...clickOrder, index]);
    }
  };

  const animateToOrange = (order) => {
    order.forEach((index, i) => {
      setTimeout(() => {
        setGrid((prevGrid) => {
          let newGrid = [...prevGrid];
          newGrid[index] = "orange";
          return newGrid;
        });
      }, i * 500);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: "350px",
          width: "100%",
        }}
      >
        {grid.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              aspectRatio: "1/1",
              backgroundColor: color,
              border: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {numbers[index] !== null ? numbers[index] : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matrix;
