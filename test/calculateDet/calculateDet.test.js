import { calculateDet } from "../../src/scripts/calculateDet/calculateDet";

describe("Checking for correct integer determinants", () => {
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

});

describe("Checking for correct deicmal determinants", () => {

    it("should return -1434843.28248", () => {

        const matrix = [
            [9.21895, 42.88789, 48.20989, 18.57653],
            [19.79742, 1.31574, 37.87920, 3.71244],
            [13.49343, 3.60794, 30.03517, 43.33285],
            [15.46940, 44.70561, 17.28990, 7.39693]
        ];

        expect(calculateDet(matrix)).toBe(-1434843.28248);

    });

    it("should return 223226.98872", () => {

        const matrix = [
            [33.41857, 21.22892, 49.67386, 48.61882],
            [41.90394, 7.61425, 43.84354, 46.51618],
            [0.81381, 28.63084, 6.64582, 15.68395],
            [16.70559, 1.27704, 35.37391, 39.46172]
        ];

        expect(calculateDet(matrix)).toBe(223226.98872);

    });

    it("should return 4403386.24854", () => {

        const matrix = [
            [13.35422, 47.28329, 0.54995, 1.25745, 47.70852],
            [23.94737, 7.14538, 30.79904, 28.88912, 22.35638],
            [14.01075, 22.36432, 24.52286, 48.10379, 38.32922],
            [7.68875, 2.25917, 14.19430, 22.45700, 22.83396],
            [11.22057, 4.29358, 3.93268, 12.95141, 27.02941]
        ];

        expect(calculateDet(matrix)).toBe(4403386.24854);

    });

    it("should return 150334.93635", () => {

        const matrix = [
            [19.18512, 2.70089, 10.38708, 3.12599, 6.46447],
            [1.07097, 6.10050, 15.41941, 12.48420, 9.86924],
            [1.58823, 14.33934, 1.17815, 13.52664, 11.01298],
            [19.75878, 14.47354, 6.49724, 9.11044, 17.78500],
            [16.56701, 3.21454, 18.48639, 17.80888, 8.88417]
        ];

        expect(calculateDet(matrix)).toBe(150334.93635);

    });

});