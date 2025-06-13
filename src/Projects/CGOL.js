import { useState } from "react";

export default function CGOL() {
  const emptyGrid = [];
  const gridWidth = 30;
  const gridHeight = 10;
  for (let i = 0; i < gridHeight; i++) {
    emptyGrid[i] = [];
    for (let j = 0; j < gridWidth; j++) {
      emptyGrid[i][j] = Math.random() > 0.7 ? 1 : 0
    }
  }
  const [grid, setGrid] = useState(emptyGrid);
  console.log(grid);
  return (
    <>
      <div className="">
        <h1>Conway's Game of Life</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridWidth}, 20px)`,
            gridTemplateRows: `repeat(${gridHeight}, 20px)`,
          }}
        >
          {grid.map((rows, orginalRowIndex) =>
            rows.map((col, orgininalColIndex) => (
              <button
                key={`${orginalRowIndex}-${orgininalColIndex}`}
                style={
                  grid[orginalRowIndex][orgininalColIndex] ? {backgroundColor: 'black'} : {backgroundColor: 'white'}
                }
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
