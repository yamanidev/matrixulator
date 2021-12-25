const dimensionSelector = document.getElementById("dimensionSelector");
const matrix = document.getElementById("matrix");
const calculateDetBtn = document.getElementById("calculateDetBtn");

function getSelectedOption() {
    return dimensionSelector.options[dimensionSelector.selectedIndex].text;
}

function resetMatrix() {
    while (matrix.lastChild) {
        matrix.removeChild(matrix.lastChild);
    }
}

// Reset selection
dimensionSelector.selectedIndex = 0;

dimensionSelector.addEventListener("change", () => {
    const dimension = +getSelectedOption();
    resetMatrix();

    matrix.style.gridTemplateColumns = `repeat(${dimension}, 40px)`;

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let inputEl = document.createElement("input");
            matrix.appendChild(inputEl);
        }
    }

});


