module.exports = (integers) => {
  let nEvens = 0;
  let nOdds = 0;
  for(let i = 0; i < 3; ++i){
    if(integers[i] % 2 === 0){
      ++nEvens;
    } else {
      ++nOdds;
    }
  }
  let result;
  if(nEvens > nOdds){
    result = findOutlier('odd');
  } else {
    result = findOutlier('even');
  }
  return result;

  function findOutlier(numberType) {
    let resultArray;
    if(numberType === 'odd'){
      resultArray = integers.filter((num) => {
        return num % 2 !== 0;
      });
    } else {
      resultArray = integers.filter((num) => {
        return num % 2 === 0;
      });
    }
    return resultArray[0];
  }
};