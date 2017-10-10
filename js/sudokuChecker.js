function SudokuChecker(){}

SudokuChecker.prototype.validRow = function(row) {
  var userRow = row;
  for(i = 1; i <= userRow.length; i++) {
    if (userRow.includes(i)) {
      return true;
    } else {
      return false;
    }
  }
};








exports.sudokuCheckerModule = SudokuChecker;
