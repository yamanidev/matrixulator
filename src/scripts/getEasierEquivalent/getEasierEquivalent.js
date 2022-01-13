import { absoluteMaxIndex } from "../utils/absoluteMaxIndex.js";

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

export { getEasierEquivalent }