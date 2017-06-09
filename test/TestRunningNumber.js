var should =require('should');
var runningNumber = require('../server/RunningNumber');

describe('TestRunningNumber', function () {
  it('should invalid input', function () {
    should.throws(function () {
      runningNumber('xxxx', 'hfhfhfh')
    }, 'error');
  });

  it('should success',function() {
    var id = '1234',
    index  = 8;
    var output = runningNumber(id, index);
    var char = String.fromCharCode(97 + index);
    output.should.equal(id + char);
  });
});
