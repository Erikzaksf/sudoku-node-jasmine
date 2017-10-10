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








exports.sudokuCheckerModule = SudokuChecker;
