import { getInnerMatrix } from "../../src/scripts/getInnerMatrix/getInnerMatrix.js";

describe("Checking for correct inner matrices of 2x2 ones", () => {

    it("should return [[14]]", () => {

        const matrix = [
            [14, 10],
            [15, 5]
        ];

        expect(getInnerMatrix(matrix, 1, 1)).toEqual([[14]]);

    });


    it("should return [[0]]", () => {

        const matrix = [
            [8, 0],
            [13, 5]
        ];

        expect(getInnerMatrix(matrix, 1, 0)).toEqual([[0]]);

    });

});

describe("Checking for correct inner matrices of 3x3 ones", () => {

    it("should return [[12.30, 4.13], [19.46, 12.65]]", () => {

        const matrix = [
            [12.30, 17.47, 4.13],
            [19.46, 11.11, 12.65],
            [8.88, 16.60, 17.81]
        ];

        expect(getInnerMatrix(matrix, 2, 1)).toEqual([
            [12.30, 4.13],
            [19.46, 12.65]
        ]);

    });

    it("should return [[10, 13], [18, 0]]", () => {

        const matrix = [
            [10, 2, 13],
            [3, 6, 10],
            [18, 8, 0]
        ];

        expect(getInnerMatrix(matrix, 1, 1)).toEqual([
            [10, 13],
            [18, 0]
        ]);

    });

    it("should return [[21, 30], [26, 27]]", () => {

        const matrix = [
            [21, 30, 11],
            [26, 27, 10],
            [11, 9, 0]
        ];

        expect(getInnerMatrix(matrix, 2, 2)).toEqual([
            [21, 30],
            [26, 27]
        ]);

    });

    it("should return [[28, 6], [1, 3]]", () => {

        const matrix = [
            [10, 28, 6],
            [21, 1, 3],
            [12, 23, 24]
        ];

        expect(getInnerMatrix(matrix, 2, 0)).toEqual([
            [28, 6],
            [1, 3]
        ]);

    });

});

describe("Checking for correct inner matrices of 6x6 ones", () => {

    it("should return the correct 5x5 matrix", () => {

        const matrix = [
            [29, 22, 8, 25, 9, 16],
            [1, 14, 8, 13, 15, 15],
            [18, 17, 29, 9, 11, 22],
            [14, 8, 12, 11, 19, 27],
            [8, 6, 0, 13, 22, 6],
            [0, 5, 3, 16, 17, 14]
        ];

        expect(getInnerMatrix(matrix, 3, 5)).toEqual([
            [29, 22, 8, 25, 9],
            [1, 14, 8, 13, 15],
            [18, 17, 29, 9, 11],
            [8, 6, 0, 13, 22],
            [0, 5, 3, 16, 17]
        ]);

    });

    it("should return the correct 5x5 matrix", () => {

        const matrix = [
            [18, 8, 18, 27, 25, 13],
            [4, 22, 15, 27, 6, 9],
            [9, 19, 1, 28, 23, 25],
            [27, 29, 25, 30, 26, 9],
            [11, 7, 27, 16, 30, 16],
            [14, 11, 5, 16, 7, 30]
        ];

        expect(getInnerMatrix(matrix, 0, 2)).toEqual([
            [4, 22, 27, 6, 9],
            [9, 19, 28, 23, 25],
            [27, 29, 30, 26, 9],
            [11, 7, 16, 30, 16],
            [14, 11, 16, 7, 30]
        ]);

    });

});

