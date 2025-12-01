const arrOfArrs = [
  ["aaron", "ake", "anna", "aje"],
  ["becky", "ben", "bright"],
  ["cara", "chris"],
  ["david", "daniel", "danielle", "djenue"],
];

const flattenedArray = arrOfArrs.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);

console.log(flattenedArray);
