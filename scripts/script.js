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

// Gets the index of the absolute maximum number
function absoluteMaxIndex(arr) {
    absoluteNums = [];

    arr.forEach(num => {
        absoluteNums.push(Math.abs(num));
    });

    return absoluteNums.indexOf(Math.max(...absoluteNums));
}

// Gets an easier matrix with the same determinant after performing elementary operations
function getEasierEquivalent(matrix) {
    const dimension = matrix.length;
    const maxIndex = absoluteMaxIndex(matrix[0]);
    const max = matrix[0][maxIndex];
    // Deep copying
    let equivMatrix = JSON.parse(JSON.stringify(matrix));

    for (let colIndex = 0; colIndex < dimension; colIndex++) {
        if (colIndex !== maxIndex) {
            for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
                equivMatrix[rowIndex][colIndex] -= (matrix[0][colIndex] / max) * matrix[rowIndex][maxIndex];
            }
        }
    }

    return equivMatrix;
}

// Gets inner matrix except rowToIgnore and colToIgnore
function getInnerMatrix(matrix, rowToIgnore, colToIgnore) {
    const dimension = matrix.length;
    let innerMatrix = [];

    for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
        if (rowIndex !== rowToIgnore) {
            let row = [];
            for (let colIndex = 0; colIndex < dimension; colIndex++) {
                if (colIndex !== colToIgnore) {
                    row.push(matrix[rowIndex][colIndex]);
                }
            }
            innerMatrix.push(row);
        }
    }

    return innerMatrix;

}


function calculateDet(matrix) {
    let newMatrix = matrix;
    let newDimension = newMatrix.length;
    let det = 1;

    while (newDimension > 2) {
        let maxIndex = absoluteMaxIndex(matrix[0]);
        let max = matrix[0][maxIndex];

        newMatrix = getEasierEquivalent(matrix);
        newMatrix = getInnerMatrix(newMatrix, 0, maxIndex);
        det *= ((-1) ** maxIndex) * max;

        // Deep copying
        matrix = JSON.parse(JSON.stringify(newMatrix));

        newDimension = newMatrix.length;
    }

    det *= (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);

    return det;

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





