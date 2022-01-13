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

