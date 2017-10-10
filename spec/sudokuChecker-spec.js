var SudokuChecker  = require('./../js/sudokuChecker.js').sudokuCheckerModule;

describe("SudokuChecker", function(){
  var testChecker;

  beforeEach(function() {
    testChecker = new SudokuChecker();
  });

  it('will return true if a single row contains numbers 1-9 with no repeats', function() {
    expect(testChecker.validRow([2,3,1,5,4,7,9,6,8])).toEqual(true);
  });

  it('will return false if a single row contains repeats', function(){
    expect(testChecker.validRow([2,5,1,5,4,7,9,6,8])).toEqual(false);
  });

  it('will return false if a single column contains repeats', function() {
    var row1 = [1,2,3,4,5,6,7,8,9];
    var row2 = [1,2,3,4,5,6,7,8,9];
    var row3 = [1,2,3,4,5,6,7,8,9];
    var row4 = [1,2,3,4,5,6,7,8,9];
    var row5 = [1,2,3,4,5,6,7,8,9];
    var row6 = [1,2,3,4,5,6,7,8,9];
    var row7 = [1,2,3,4,5,6,7,8,9];
    var row8 = [1,2,3,4,5,6,7,8,9];
    var row9 = [1,2,3,4,5,6,7,8,9];
    var myArray = [row1,row2,row3,row4,row5,row6,row7,row8,row9]
    expect(testChecker.validColumn(myArray)).toEqual(false);

  });

});
