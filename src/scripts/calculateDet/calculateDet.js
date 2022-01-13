import { absoluteMaxIndex } from "../utils/absoluteMaxIndex.js";
import { getEasierEquivalent } from "../getEasierEquivalent/getEasierEquivalent.js";
import { getInnerMatrix } from "../getInnerMatrix/getInnerMatrix.js";

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
        // matrix = JSON.parse(JSON.stringify(newMatrix));
        matrix = newMatrix;

        newDimension = newMatrix.length;
    }

    det *= (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0]);

    return det;
}

export { calculateDet }