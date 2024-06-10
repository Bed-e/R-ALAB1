//Expanding Functionality
//re: Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.

const myCSV =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

const someMoreCSV =
  "Name,Age,Fav Color,preferred dimension\nBen,23,orange, comfortable\nAriel,26,blue,medium\nFrank,23,yellow,benny size\nClayton,27,green,grande\n";

const fiveColCSV =
  "Name, Street, State, ZIP, Will to live\nBen,Commerce st.,TX,75200,n/a\nfrank,commerce st.,TX,75200,certifiably absent\ncristina,pleasure dr.,TX,79400,kpop dependant";

const CSVFromNewLab =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function makeArray(CSV, title) {
  let columnAmt = 0;
  for (let i = 0; i < CSV.length; i++) {
    if (CSV[i] == ",") {
      columnAmt++;
    }
    if (CSV[i] == "\n") {
      columnAmt++;
      break;
    }
  }
  //console.log("cols: " + columnAmt);

  let rowAmt = 0;
  for (let j = 0; j < CSV.length; j++) {
    if (CSV[j] == "\n") {
      rowAmt++;
    }
  }
  if (CSV[CSV.length - 1] == "\n") {
    rowAmt--;
  }
  //console.log("rows: " + rowAmt);
  let arr = [];
  let row = [];
  let startIndex,
    endIndex = 0;
  //create one row at a time,
  //push it onto arr to create arr with elements that are each a row array
  for (let k = 0; k < CSV.length; k++) {
    if (CSV[k] == "," || CSV[k] == "\n") {
      endIndex = k;
      row.push(CSV.substring(startIndex, endIndex));
      //   console.log(
      //     "pushing cell: " + CSV.substring(startIndex, endIndex) + " to row"
      //   );
      startIndex = k + 1;
      if (CSV[k] == "\n") {
        //console.log("ROW: " + row);
        arr.push(row);
        // console.log("pushing row: " + row + " to arr");
        row = [];
      }
    }
  }
  if (CSV[CSV.length - 1] !== "\n") {
    // console.log("ROW: " + row);
    arr.push(row);
    // console.log("pushing row: " + row + " to arr");
  }
  console.log(
    "arr: " + title + "\n is an array with " + arr.length + " elements"
  );
  console.log("[");
  for (let row = 0; row < arr.length; row++) {
    process.stdout.write("[");
    // console.log("on row: " + row);
    // console.log("row length: " + arr[row].length);
    for (let element = 0; element < arr[row].length; element++) {
      //   console.log("on element: " + element + " AKA " + arr[row][element]);
      process.stdout.write("[" + arr[row][element] + "]");
      if (element != arr[row].length - 1) {
        process.stdout.write(",");
      }
    }
    process.stdout.write("]\n");
  }
  console.log("]");
}
console.log("someMoreCSV:");
makeArray(someMoreCSV, "someMoreCSV");
console.log("fiveColCSV");
makeArray(fiveColCSV, "fiveColCSV");
console.log("CSVFromNewLab");
makeArray(CSVFromNewLab, "CSVFromNewLab");
