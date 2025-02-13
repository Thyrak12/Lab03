
function transformToObjects(listOfNumbers) {
  result = [];
  // Write your code here
  listOfNumbers.map((number) => {
    result.push({val: number});
  });
  return result;
}

// --------------------------------------------------------
// TESTS ZONE
// --------------------------------------------------------
// test 1  -
console.log(JSON.stringify(transformToObjects([1, 2, 3]))); // Should  be     [{val: 1}, {val: 2}, {val: 3}]
console.log(JSON.stringify(transformToObjects([44])));
