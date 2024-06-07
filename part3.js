const CSV =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n";
let newArray = [];
let startIndex = 0;
for (let i = 0; i < CSV.length; i++) {
  if (CSV[i] == "\n") {
    newArray.push(CSV.substring(startIndex, i));
    // console.log("pushing: " + CSV.substring(startIndex, i));
    startIndex = i + 1;
  }
}
// console.log(newArray);

let dataArray = [];

for (let j = 0; j < newArray.length; j++) {
  //j are the strings/rows
  startIndex = 0;
  dataArray.push([]);
  for (k = 0; k <= newArray[j].length; k++) {
    //k are letters of the strings j
    if (newArray[j][k] == "," || k == newArray[j].length) {
      dataArray[j].push(newArray[j].substring(startIndex, k));
      //console.log("pushing: " + newArray[j].substring(startIndex, k));
      startIndex = k + 1;
    }
  }
}
// console.log(dataArray);

let cellHeaders = [];

for (let i = 0; i < dataArray[0].length; i++) {
  cellHeaders.push(dataArray[0][i]);
}
console.log(cellHeaders);

let objectArray = [];

let object = {};
for (let i = 1; i < dataArray.length; i++) {
  row = dataArray[i];
  object = row;
  objectArray.push(object);
}
console.log(objectArray);
