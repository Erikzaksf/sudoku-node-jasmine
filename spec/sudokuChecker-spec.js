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

});
