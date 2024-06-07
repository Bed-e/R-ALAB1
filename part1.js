//refactor old code
//re: Now that you have knowledge of arrays and objects, how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.

const myCSV =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

const someMoreCSV =
  "Name,Age,Fav Color,preferred dimension\nBen,23,orange, comfortable\nAriel,26,blue,medium\nFrank,23,yellow,benny size\nClayton,27,green,grande\n";

function printRows(CSV) {
  let cells = ["", "", "", ""]; //declare array of cells that will store data in one row
  let onCell = 0; //declare variable to keep track of which cell we are storing data in now
  let startIndex, endIndex; //declare start and end index of substring of data
  startIndex = 0; //make sure to start at the beginning on the CSV string
  for (let i = 0; i < CSV.length; i++) {
    //loop through string and divide it on commas
    //use String.substring([startindex],[endindex]);
    //to create cells and store in cells[onCell]
    if (CSV[i] == "," || CSV[i] == "\n") {
      endIndex = i; //setting the endIndex of the cell to the index of the comma ensures the data ends right before the comma
      cells[onCell] = CSV.substring(startIndex, endIndex); //create cells and store in cells[onCell]
      onCell++; //increment onCell each time we store a value in cells
      startIndex = i + 1; //bump up starting index of next cell to after the previous comma
      if (CSV[i] == "\n") {
        //once we find a newline character
        console.log(
          cells[0] + "|" + cells[1] + "|" + cells[2] + "|" + cells[3] //print output of row from cells
        );
        onCell = 0; //reset to overwrite the 0th cell of cells once again
      }
    }
  }
}

printRows(myCSV);
printRows(someMoreCSV);
