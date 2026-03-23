import {capitalize, reverseString, calculator, ceasarCipher, analyzeArray} from "./src/project"

test("capitalizes the first letter",() => {
    expect(capitalize("cat")).toBe("Cat");
    expect(capitalize("nigga")).toBe("Nigga")
})

test("reverses a string",() => {
    expect(reverseString("cat")).toBe("tac");
    expect(reverseString("nigga")).toBe("aggin")
})

test("calculates values",() => {
    expect(calculator.add(10,5)).toBe(15);
    expect(calculator.subtract(10,5)).toBe(5);
    expect(calculator.divide(10,5)).toBe(2);
    expect(calculator.multiply(10,5)).toBe(50);
})

test("shifts letters", () => {
    expect(ceasarCipher("cat",1)).toBe("dbu")
    expect(ceasarCipher("hot",2)).toBe("jqv")
})

test("analyzes an array", () => {
    expect(analyzeArray([1,2,3,4])).toStrictEqual({
        average: 2.5,
        length: 4,
        min: 1,
        max: 4

})
})