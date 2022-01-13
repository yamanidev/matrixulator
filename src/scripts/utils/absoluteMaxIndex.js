// Gets the index of the absolute maximum number
function absoluteMaxIndex(arr) {
    absoluteNums = [];

    arr.forEach(num => {
        absoluteNums.push(Math.abs(num));
    });

    return absoluteNums.indexOf(Math.max(...absoluteNums));
}

export { absoluteMaxIndex }