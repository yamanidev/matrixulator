const dimensionSelector = document.getElementById("dimensionSelector");
const matrix = document.getElementById("matrix");
const calculateDetBtn = document.getElementById("calculateDetBtn");

function getSelectedDimension() {
    return dimensionSelector.options[dimensionSelector.selectedIndex].text;
}

function resetMatrix() {
    while (matrix.lastChild) {
        matrix.removeChild(matrix.lastChild);
    }
}

function numbersOnly(ev) {
    let key = ev.key;
    // Accepts only integers
    // Got lazy to accept decimals too
    let regex = /^\d+$/;
    if (!(regex.test(key))) {
        ev.preventDefault();
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

    matrix.style.gridTemplateColumns = `repeat(${dimension}, 40px)`;

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let inputEl = document.createElement("input");
            inputEl.addEventListener("keypress", numbersOnly);
            matrix.appendChild(inputEl);
        }
    }

});


