const gridContainer = document.getElementById('gridContainer');
let numberOfRow = document.querySelector('#myRange').value;
let numberOfColumn = document.querySelector('#myRange').value;


const resetButton = document.querySelector('.resetBtn');

let row;
let cells = document.getElementsByClassName('cell');

const slider = document.getElementById("myRange");
const output = document.getElementById("gridNumber");
output.innerHTML = `${slider.value} * ${slider.value}`;
slider.oninput = function () {
    output.innerHTML = `${slider.value} * ${slider.value}`;
}

let allTools = document.querySelectorAll('.tools');
let colorPicker = document.querySelector('#colorPicker').value
let toggleColorMode = document.querySelector('#colorMode');
let toggleRainbowMode = document.querySelector('#rainbowMode');

resetButton.addEventListener('click', () => {
    resetGame();
});

for (let i = 0; i < numberOfRow; ++i) {
    row = document.createElement('div');
    row.classList.add('row');
    gridContainer.appendChild(row);
    for (let c = 0; c < numberOfColumn; ++c) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}

function tglColorMode() {
    if (!toggleColorMode.classList.contains('toggled')) {
        toggleColorMode.classList.add('toggled');
    } else if (toggleColorMode.classList.contains('toggled')) {
        toggleColorMode.classList.remove('toggled');
    }
};

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

function makeNewGrid() {
    for (i = 0; i < numberOfRow; ++i) {
        row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
        for (c = 0; c < numberOfColumn; ++c) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
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
    makeNewGrid();
    colorCell();
};

function pickColor() {
    colorPicker = document.querySelector('#colorPicker').value;
}

function checkMode() {
    allTools.classList.remove('toggled');
}

// makeGrid();

// function makeGrid() {
//     for (let i = 0; i < numberOfRow; ++i) {
//         const row = document.createElement('div');
//         row.classList.add('row');
//         gridContainer.appendChild(row);
//         for (let c = 0; c < numberOfColumn; ++c) {
//             const cell = document.createElement('div');
//             cell.classList.add('cell');
//             row.appendChild(cell);
//             cell.addEventListener('mouseover', function (e) {
//                 if ((toggleColorMode.classList.contains('toggled')) && (e.target.matches('.cell'))) {
//                     pickColor();
//                     cell.style.backgroundColor = colorPicker;

//                 } else if ((toggleRainbowMode.classList.contains('toggled')) && (e.target.matches('.cell'))) {
//                     RGBColor = generateRandomRGB();
//                     cell.style.backgroundColor = RGBColor;
//                 }
//             });
//         }
//     }
// }


// 

// for (let w = 0; w < 1000; ++w) {
//     cells[0].addEventListener('mouseover', () => {
//         if (toggleColorMode.classList.contains('toggled')) {
//             console.log("heard");
//             pickColor();
//             cells[0].style.backgroundColor = colorPicker;
//         } else if (toggleRainbowMode.classList.contains('toggled')) {
//             RGBColor = generateRandomRGB();
//             cells[0].style.backgroundColor = RGBColor;
//         }
//     });
// }s

function colorCell() {
    for (const cell of cells) {
        cell.addEventListener('mouseover', () => {
            if (toggleColorMode.classList.contains('toggled')) {
                pickColor();
                cell.style.backgroundColor = colorPicker;
            } else if (toggleRainbowMode.classList.contains('toggled')) {
                RGBColor = generateRandomRGB();
                cell.style.backgroundColor = RGBColor;
            }
        })
    }
}

colorCell();