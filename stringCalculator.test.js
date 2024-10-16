const stringCalculator = require('./stringCalculator');

test('returns 0 for an empty string', () => {
    expect(stringCalculator.add('')).toBe(0);
});

test('returns the number when only one number', () => {
    expect(stringCalculator.add('1')).toBe(1);
});

test('returns the sum of two numbers', () => {
    expect(stringCalculator.add('1,2')).toBe(3);
});

test('returns the sum of multiple numbers', () => {
    expect(stringCalculator.add('1,2,3,4')).toBe(10);
});

test('handles new lines in numbers', () => {
    expect(stringCalculator.add('1\n2,3')).toBe(6);
});

test('supports different delimiters', () => {
    expect(stringCalculator.add('//;\n1;2')).toBe(3);
});

test('throws an error for negative numbers', () => {
    expect(() => {
        stringCalculator.add('1,-2,3');
    }).toThrow('negative numbers not allowed: -2');
});

test('throws an error for multiple negative numbers', () => {
    expect(() => {
        stringCalculator.add('1,-2,-3');
    }).toThrow('negative numbers not allowed: -2,-3');
});
