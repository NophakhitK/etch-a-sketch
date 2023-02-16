
// let columns = 4;
// let rows = 4;

// let grid = document.createElement('div');
// grid.className = 'grid';
// for (let i = 0; i < columns; ++i) {
//     let column = document.createElement('div'); // create column
//     column.className = 'column';
//     for (let j = 0; j < rows; ++j) {
//         let row = document.createElement('div'); // create row
//         row.className = 'row';
//         column.appendChild(row); // append row in column
//     }
//     grid.appendChild(column); // append column inside grid
// }
// document.body.appendChild(grid);


const gridContainer = document.getElementById('container');
const numberOfRow = 16;
const numberOfColumn = 16;


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
                cell.classList.add('colorCell')
            }
        });
    }
}
