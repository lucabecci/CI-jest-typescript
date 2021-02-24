import { add } from "../../src/helpers/calculate";
describe("test in add function", () => {
    test("should return 200 for add(100+100)", () => {
        expect(add(100, 100)).toBe(200);
    });
    test("should return 325 for add(300+25)", () => {
        expect(add(300, 25)).toBe(325);
    });

    test("should return 5", () => {
        expect(add(3, 2)).toBe(5);
    });
});
