function resetMatrix(matrixEl) {
    while (matrixEl.firstChild) {
        matrixEl.removeChild(matrixEl.firstChild);
    }
}

export { resetMatrix }