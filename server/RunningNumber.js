var RunningNumber = function(id, index ){
  if(isNaN(id) || isNaN(index)){
    throw 'error';
  }

  return id+String.fromCharCode(97+index);
}
module.exports = RunningNumber;
