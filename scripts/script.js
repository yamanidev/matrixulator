const dimensionSelector = document.getElementById("dimensionSelector");
const calculateDetBtn = document.getElementById("calculateDetBtn");

function getSelectedOption() {
    return dimensionSelector.options[dimensionSelector.selectedIndex].text;
}

// Reset selection
dimensionSelector.selectedIndex = 0;

dimensionSelector.addEventListener("change", () => {

});


