const dimensionSelector = document.getElementById("dimensionSelector");
const matrixEl = document.getElementById("matrix");
const calculateDetBtn = document.getElementById("calculateDetBtn");

function getSelectedDimension() {
    return dimensionSelector.options[dimensionSelector.selectedIndex].text;
}

function createMatrix(dimension) {

    matrixEl.style.gridTemplateColumns = `repeat(${dimension}, 40px)`;

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let inputEl = document.createElement("input");
            inputEl.classList.add("cell");
            inputEl.addEventListener("keypress", acceptNumbersOnly);
            matrixEl.appendChild(inputEl);
        }
    }

}

function resetMatrix() {
    while (matrixEl.firstChild) {
        matrixEl.removeChild(matrixEl.firstChild);
    }
}

function acceptNumbersOnly(ev) {
    let key = ev.key;
    // Accepts only integers
    // Got lazy to accept decimals too
    let regex = /^\d+$/;
    if (!regex.test(key)) {
        ev.preventDefault();
    }
}

function getMatrix() {
    const dimension = getSelectedDimension();
    const cells = document.getElementsByClassName("cell");
    const matrix = [];
    let row = [];

    for (let i = 0; i < cells.length; i++) {
        row.push(+cells[i].value);
        if ((i + 1) % dimension == 0) {
            matrix.push(row);
            row = [];
        }
    }

    return matrix;
}

function getBiggestColumnIndex(matrix) {
    return matrix[0].indexOf(Math.max(...matrix[0]));
}

function calculateDet(matrix) {
    let det = 1;



}

// Reset selection
dimensionSelector.selectedIndex = 0;

dimensionSelector.addEventListener("change", () => {
    const dimension = +getSelectedDimension();

    if (!calculateDetBtn.style.display) {
        calculateDetBtn.style.display = "inline-block";
    }

    resetMatrix();

    createMatrix(dimension);

});

function displayMatrix(matrix) {
    const dimension = matrix.length;
    let rowString = "";

    for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
        for (let colIndex = 0; colIndex < dimension; colIndex++) {
            rowString += `${matrix[rowIndex][colIndex]} `;
        }
        console.log(rowString);
        rowString = "";
    }
}

// its determinant is 74
let matrix = [
    [1, 5, 3],
    [2, 4, 7],
    [4, 6, 2]
];





