const gridContainer = document.getElementById('gridContainer');
let numberOfRow = document.querySelector('#myRange').value;
let numberOfColumn = document.querySelector('#myRange').value;
const resetButton = document.querySelector('.resetBtn');

const slider = document.getElementById("myRange");
const output = document.getElementById("gridNumber");
output.innerHTML = `${slider.value} * ${slider.value}`;

let allTools = document.querySelectorAll('.tools');

let toggleColorMode = document.querySelector('#colorMode');

function tglColorMode() {
    if (!toggleColorMode.classList.contains('toggled')) {
        toggleColorMode.classList.add('toggled');
    } else if (toggleColorMode.classList.contains('toggled')) {
        toggleColorMode.classList.remove('toggled');
    }
};

let toggleRainbowMode = document.querySelector('#rainbowMode');

function tglRainbowMode() {
    if (!toggleRainbowMode.classList.contains('toggled')) {
        toggleRainbowMode.classList.add('toggled');
    } else if (toggleRainbowMode.classList.contains('toggled')) {
        toggleRainbowMode.classList.remove('toggled');
    }
}




function generateRandomRGB() {
    let RGBColor1 = Math.floor(Math.random() * 256);
    let RGBColor2 = Math.floor(Math.random() * 256);
    let RGBColor3 = Math.floor(Math.random() * 256);
    let RGBColor = `rgb(${RGBColor1},${RGBColor2},${RGBColor3})`;
    return RGBColor;
}


slider.oninput = function () {
    output.innerHTML = `${slider.value} * ${slider.value}`;
}

let colorPicker = document.querySelector('#colorPicker').value

resetButton.addEventListener('click', () => {
    resetGame();
});

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
                if ((toggleColorMode.classList.contains('toggled')) && (e.target.matches('.cell'))) {
                    pickColor();
                    cell.style.backgroundColor = colorPicker;

                } else if ((toggleRainbowMode.classList.contains('toggled')) && (e.target.matches('.cell'))) {
                    RGBColor = generateRandomRGB();
                    cell.style.backgroundColor = RGBColor;
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

function pickColor() {
    colorPicker = document.querySelector('#colorPicker').value;
}

function checkMode() {
    allTools.classList.remove('toggled');
}

