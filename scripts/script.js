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
                console.log(`element before: ${matrix[rowIndex][colIndex]}`);
                equivMatrix[rowIndex][colIndex] -= (matrix[0][colIndex] / max) * matrix[rowIndex][maxIndex];
                console.log(`element after: ${equivMatrix[rowIndex][colIndex]}`);
            }
        }
    }

    return equivMatrix;
}

function calculateDet(matrix) {
    const dimension = matrix.length;

    if (dimension === 1) {
        return matrix[0][0];
    }
    else if (dimension === 2) {
        return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);
    }
    else {
        let det = 1;
        let oldMatrix = matrix;
        let oldDimension = dimension;
        let newMatrix = [];
        let maxIndex;

        while (oldDimension > 2) {
            console.log(`\tdet: ${det}`);

            maxIndex = absoluteMaxIndex(oldMatrix[0]);
            det *= ((-1) ** maxIndex) * oldMatrix[0][maxIndex];

            console.log("\tMatrix");
            displayMatrix(oldMatrix);

            for (let colIndex = 0; colIndex < oldDimension; colIndex++) {
                if (colIndex !== maxIndex) {
                    for (let rowIndex = 0; rowIndex < oldDimension; rowIndex++) {
                        oldMatrix[rowIndex][colIndex] -= (oldMatrix[rowIndex][colIndex] * oldMatrix[rowIndex][maxIndex]) / oldMatrix[0][maxIndex];
                    }
                }
            }

            console.log("\tModified matrix");
            displayMatrix(oldMatrix);

            let row = [];

            for (let rowIndex = 1; rowIndex < oldDimension; rowIndex++) {
                for (let colIndex = 0; colIndex < oldDimension; colIndex++) {
                    if (colIndex !== maxIndex) {
                        row.push(oldMatrix[rowIndex][colIndex]);
                    }
                }
                newMatrix.push(row);
                row = [];
            }

            oldMatrix = newMatrix;
            oldDimension = oldMatrix.length;



        }

        console.log(`\tdet: ${det}`);

        if (oldDimension === 2) {
            det *= (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);
        }

        return det;
    }

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





