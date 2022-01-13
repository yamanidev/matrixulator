function acceptNumbersOnly(ev) {
    let key = ev.key;
    // Accepts only integers
    // Got lazy to accept decimals too
    let regex = /^\d+$/;
    if (!regex.test(key)) {
        ev.preventDefault();
    }
}

function createMatrix(dimension, matrixEl) {

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

export { createMatrix }