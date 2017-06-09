var ValidateEnglishChar = function ( input ) {
  if (!input) {
    return false;
  }

  var english = /^[A-Za-z0-9 ]*$/;
  var result =  english.test (input)
  return result;
}


module.exports = ValidateEnglishChar;
