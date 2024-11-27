import { sum } from "../src/math";

test("Devem somar dois números", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
});
