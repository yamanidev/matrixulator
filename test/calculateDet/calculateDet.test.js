import { calculateDet } from "../../src/scripts/calculateDet/calculateDet";

it("should return 74", () => {

    const matrix = [
        [1, 5, 3],
        [2, 4, 7],
        [4, 6, 2]
    ];

    expect(calculateDet(matrix)).toBe(74);

});

it("should return -222", () => {

    const matrix = [
        [7, 2, 0],
        [3, -15, 0],
        [6, -4, 2]
    ];

    expect(calculateDet(matrix)).toBe(-222);

});

it("should return -32", () => {

    const matrix = [
        [4, -3, 0],
        [2, -1, 2],
        [1, 5, 7]
    ];

    expect(calculateDet(matrix)).toBe(-32);
});

it("should return -418", () => {

    const matrix = [
        [3, 2, -1, 4],
        [2, 1, 5, 7],
        [0, 5, 2, -6],
        [-1, 2, 1, 0]
    ];

    expect(calculateDet(matrix)).toBe(-418);

});

it("should return -4", () => {

    const matrix = [
        [1, 3, 1, 4],
        [3, 9, 5, 15],
        [0, 2, 1, 1],
        [0, 4, 2, 3]
    ];

    expect(calculateDet(matrix)).toBe(-4);

});

it("should return -18", () => {

    const matrix = [
        [3, 0, 0, 3, 0],
        [-3, 0, -2, 0, 0],
        [0, -1, 0, 0, -3],
        [0, 0, 0, 3, 3],
        [0, -1, 2, 0, 1]
    ];

    expect(calculateDet(matrix)).toBe(-18);

});