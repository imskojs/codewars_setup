String.prototype.toJadenCase = function () {
  let strArray = this.split(' ');
  let jadenArray = strArray.map((str)=>{
    let firstLetter = str.substr(0, 1);
    let rest = str.substr(1);
    firstLetter = firstLetter.toUpperCase();
    return firstLetter + rest;
  });
  let result = jadenArray.join(' ');
  return result;
};