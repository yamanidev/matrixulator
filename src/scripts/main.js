import { getSelectedDimension } from "./utils/getSelectedDimension.js";
import { createMatrix } from "./utils/createMatrix.js";
import { resetMatrix } from "./utils/resetMatrix.js";
import { calculateDet } from "./calculateDet/calculateDet.js";

const dimensionSelector = document.getElementById("dimensionSelector");
const matrixEl = document.getElementById("matrix");
const calculateDetBtn = document.getElementById("calculateDetBtn");
const resultEl = document.getElementById("result");

function getMatrix() {
    const dimension = getSelectedDimension(dimensionSelector);
    const cells = document.getElementsByClassName("cell");
    const matrix = [];
    let row = [];

    for (let i = 0; i < cells.length; i++) {
        row.push(+cells[i].value);
        if ((i + 1) % dimension === 0) {
            matrix.push(row);
            row = [];
        }
    }

    return matrix;
}

// Reset selection
dimensionSelector.selectedIndex = 0;

dimensionSelector.addEventListener("change", () => {
    const dimension = getSelectedDimension(dimensionSelector);

    resetMatrix(matrixEl);
    createMatrix(dimension, matrixEl);

    if (!calculateDetBtn.style.display) {
        calculateDetBtn.style.display = "inline-block";
    }


});

calculateDetBtn.addEventListener("click", () => {
    const matrix = getMatrix();
    resultEl.innerText = `Result: ${calculateDet(matrix)}`;
});



// Future tests and their expected values:

// determinant: 74
// let matrix = [
//     [1, 5, 3],
//     [2, 4, 7],
//     [4, 6, 2]
// ];

// determinant: -222
// let matrix = [
//     [7, 2, 0],
//     [3, -15, 0],
//     [6, -4, 2]
// ];

// determinant: -32
// let matrix = [
//     [4, -3, 0],
//     [2, -1, 2],
//     [1, 5, 7]
// ];

// determinant: -418
// let matrix = [
//     [3, 2, -1, 4],
//     [2, 1, 5, 7],
//     [0, 5, 2, -6],
//     [-1, 2, 1, 0]
// ];

// determinant: -4
// let matrix = [
//     [1, 3, 1, 4],
//     [3, 9, 5, 15],
//     [0, 2, 1, 1],
//     [0, 4, 2, 3]
// ];

// determinant: -18
// let matrix = [
//     [3, 0, 0, 3, 0],
//     [-3, 0, -2, 0, 0],
//     [0, -1, 0, 0, -3],
//     [0, 0, 0, 3, 3],
//     [0, -1, 2, 0, 1]
// ];

