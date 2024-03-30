const canvas = document.querySelector("#canvas");

let gridSize = 16;


InitializeGrid();


function InitializeGrid() {
    // Build each row
    for(let row = 0; row < gridSize; row++) {
        const gridRow = document.createElement("div");
        gridRow.className = "grid-row";
        canvas.appendChild(gridRow);

        // Build each cell in the row
        for(let cell = 0; cell < gridSize; cell++) {
            const gridCell = document.createElement("div");
            gridCell.className = "grid-cell";
            gridRow.appendChild(gridCell);
        }
    }
}