import { caesarCipher, sum } from "./sum";
import { capitalize } from "./sum";
import { reverse } from "./sum";
import { calc } from "./sum";
import { analyzeArray } from "./sum";


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('capitalize first letter', () => {
    expect(capitalize("project")).toBe("Project");
})

test('string is reversed', () => {
    expect(reverse('computer')).toBe("retupmoc");
})

test('adds from calc object', () => {
    expect(calc.add(2,3)).toBe(5);
})

test('subtracts from calc object', () => {
    expect(calc.sub(5,2)).toBe(3);
})

test('mulitply from calc object', () => {
    expect(calc.multiply(2,3)).toBe(6);
})

test('divide from calc object', () => {
    expect(calc.divide(8,2)).toBe(4);
})

test('caesar', () => {
    expect(caesarCipher("hello", 1)).toBe("ifmmp")
})

test('caesar to loop z', () => {
    expect(caesarCipher("zero", 1)).toBe("afsp");
})

// test('average', () => {
//     expect(analyzeArray([1, 5, 2, 6])).toBe(3.5)
// })

test('analyzeArray', () => {
    expect(analyzeArray([1, 5, 2, 6])).toMatchObject({average: 3.5, min: 1, max: 6, length: 4})
})

test('analyzeArray', () => {
    expect(analyzeArray([5, 2, 6, 12, 8, 10])).toMatchObject({average: 7.166, min: 2, max: 12, length: 6})
})