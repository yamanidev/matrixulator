import { getSelectedDimension } from "./utils/getSelectedDimension.js";
import { createMatrix } from "./utils/createMatrix.js";
import { resetMatrix } from "./utils/resetMatrix.js";
import { calculateDet } from "./calculateDet/calculateDet.js";
import { displayMatrix } from "./utils/displayMatrix.js";

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

function validateCells() {
    const cells = document.getElementsByClassName("cell");

    for (const cell of cells) {
        if (cell.classList.contains("faulty")) {
            cell.classList.remove("faulty");
        }
    }

    let pattern = /^-?(\d*)(\.\d+)?$/;

    for (const cell of cells) {
        if (!pattern.test(cell.value) || !cell.value) {
            cell.classList.add("faulty");
        }
    }

    return document.getElementsByClassName("faulty").length === 0;
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

    if (validateCells()) {
        const matrix = getMatrix();
        displayMatrix(matrix);
        resultEl.innerHTML = `Result &#8776; ${calculateDet(matrix)}`;
    }
    else {
        alert("You provided invalid input!\nPlease check again.");
    }


});

