const fs = require('fs');

// Initialize an empty array to store the results
let resultArray = [];

// Iterate through numbers 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    resultArray.push("BIG BANG");
  } else if (i % 3 === 0) {
    resultArray.push("BIG");
  } else if (i % 5 === 0) {
    resultArray.push("BANG");
  } else {
    resultArray.push(i.toString());
  }
}
console.log(resultArray);
// Convert the result array to JSON format
let jsonString = JSON.stringify(resultArray);

// Write the JSON string to a file named 'output.json'
fs.writeFile('output.json', jsonString, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
