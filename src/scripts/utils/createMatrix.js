function filterInput(e) {
    let key = e.key;
    let pattern = /\-|\d|\./;
    if (!pattern.test(key)) {
        e.preventDefault();
    }
}

function createMatrix(dimension, matrixEl) {

    matrixEl.style.gridTemplateColumns = `repeat(${dimension}, 40px)`;

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let inputEl = document.createElement("input");
            inputEl.classList.add("cell");
            inputEl.addEventListener("keypress", filterInput);
            matrixEl.appendChild(inputEl);
        }
    }
}

export { createMatrix }