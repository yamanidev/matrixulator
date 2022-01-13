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

export { displayMatrix }