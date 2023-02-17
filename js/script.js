const gridContainer = document.getElementById('gridContainer');
let numberOfRow = document.querySelector('#myRange').value;
let numberOfColumn = document.querySelector('#myRange').value;
const resetButton = document.querySelector('.resetBtn');

const slider = document.getElementById("myRange");
const output = document.getElementById("gridNumber");
output.innerHTML = `${slider.value} * ${slider.value}`;

slider.oninput = function () {
    output.innerHTML = `${slider.value} * ${slider.value}`;
}

makeGrid();

function makeGrid() {
    for (let i = 0; i < numberOfRow; ++i) {
        const row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
        for (let c = 0; c < numberOfColumn; ++c) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
            cell.addEventListener('mouseover', function (e) {
                if (e.target.matches('.cell')) {
                    cell.classList.add('colorCell');
                    resetButton.addEventListener('click', () => {
                        cell.classList.remove("colorCell");
                        resetGame();
                    });
                }
            });
        }
    }
}

function resetGame() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    newSliderValue = document.querySelector('#myRange').value;
    numberOfColumn = newSliderValue;
    numberOfRow = newSliderValue;
    makeGrid();
};