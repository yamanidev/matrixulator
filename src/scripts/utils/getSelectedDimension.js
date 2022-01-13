function getSelectedDimension(selectorEl) {
    return selectorEl.options[selectorEl.selectedIndex].text;
}

export { getSelectedDimension }