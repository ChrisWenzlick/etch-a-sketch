const canvas = document.querySelector("#canvas");
const newGridButton = document.querySelector("#new-grid-button");

let gridSize = 16;
let clickToColor = true;
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true};
document.body.onmouseup = () => {mouseDown = false};

newGridButton.onclick = () => {
    let input = 0;
    
    do {
        input = prompt("Please enter a grid size from 1 to 100", gridSize);
    } while(input < 1 || input > 100)

    InitializeGrid();
};


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

            gridCell.addEventListener('mouseover', (e) => {
                if(mouseDown || !clickToColor){
                    ColorWithHover(gridCell);
                }
            });

            gridRow.appendChild(gridCell);
        }
    }
}

function ColorWithHover(gridCell) {
    gridCell.style.backgroundColor = GetColor();
}

function GetColor() {
    let newHexColor = "#";
    for(let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharacters.length);
        newHexColor += hexCharacters[randomIndex];
    }

    return newHexColor;
}