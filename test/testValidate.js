var should = require ( 'should' );
var ValidateEnglishChar = require ( '../server/ValidateEnglishChar' );

describe ('test ValidateEnglishChar', function (){
  it ('should valid input',function () {
    var result = ValidateEnglishChar('rwqiueyroiuqwyeiouryqowieury');
      result.should.equal ( true );
  });

  it ('should have eng charactors and number',function () {
    var result = ValidateEnglishChar('rwqiueyroiuqwyeiur234187263487');
      result.should.equal ( true );
  });

  it ('should have eng charactors and number with space',function () {
    var result = ValidateEnglishChar('rwqiueyroiuqwyeiu 234187263487');
      result.should.equal ( true );
  });

  it ('should have only number',function () {
    var result = ValidateEnglishChar('234187263487');
      result.should.equal ( true );
  });

  it ('should have number and eng charactors',function () {
    var result = ValidateEnglishChar('234187263487rwqiueyroiuqwyeiur');
      result.should.equal ( true );
  });

  it('should have special char with eng characters',function () {
    var result = ValidateEnglishChar('aasdfasfasdf%$#%$#%$@$%');
    result.should.equal ( false );
  });

  it('should have thai char',function () {
    var result = ValidateEnglishChar('ฟหกดวฟสาห่ดสวฟาหก่ดว');
    result.should.equal ( false );
  });

  it ('should have no input',function () {
    var result = ValidateEnglishChar('');
      result.should.equal ( false );
  });
});
