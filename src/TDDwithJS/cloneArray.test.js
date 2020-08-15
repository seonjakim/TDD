const cloneArray = require("./cloneArray");

test("properly clones array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array); //check the array is a new clone instead of returning the same array
});
