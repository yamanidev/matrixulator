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

export { getInnerMatrix }