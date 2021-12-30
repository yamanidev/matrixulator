const dimensionSelector = document.getElementById("dimensionSelector");
const matrixEl = document.getElementById("matrix");
const calculateDetBtn = document.getElementById("calculateDetBtn");

function getSelectedDimension() {
    return dimensionSelector.options[dimensionSelector.selectedIndex].text;
}

function resetMatrix() {
    while (matrixEl.firstChild) {
        matrixEl.removeChild(matrixEl.firstChild);
    }
}

function numbersOnly(ev) {
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

// Reset selection
dimensionSelector.selectedIndex = 0;

dimensionSelector.addEventListener("change", () => {
    const dimension = +getSelectedDimension();

    if (!calculateDetBtn.style.display) {
        calculateDetBtn.style.display = "inline-block";
    }

    resetMatrix();

    matrixEl.style.gridTemplateColumns = `repeat(${dimension}, 40px)`;

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let inputEl = document.createElement("input");
            inputEl.classList.add("cell");
            inputEl.addEventListener("keypress", numbersOnly);
            matrixEl.appendChild(inputEl);
        }
    }

});


