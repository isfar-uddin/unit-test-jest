const functions = require('./functions');

test("Add 2+2 is equal to 4", () => {
    expect(functions.add(2,2)).toBe(4);
});