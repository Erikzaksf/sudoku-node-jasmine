function SudokuChecker(){}

SudokuChecker.prototype.validRow = function(row) {
  var userRow = row;

  for(i = 1; i <= userRow.length; i++) {
    if (!userRow.includes(i)) {
      return false;
    }
  }
  return true;
};


SudokuChecker.prototype.validColumn = function(array) {
  var column = [];
  var myArray = array;
  for(i = 0; i < 9; i++){
    column.push(myArray[i][0])
  }
  for(i = 0; i <= column.length; i++) {
    if (!column.includes(i)) {
      return false;
    }
  }
  return true;
};








exports.sudokuCheckerModule = SudokuChecker;
