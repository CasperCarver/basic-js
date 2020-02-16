const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(N) {
  N=parseInt(N, 10); 
  if ( N >15 || N<15 || N==""){
    return false;
  }
  t = math.log(MODERN_ACTIVITY/N)/(0.693/HALF_LIFE_PERIOD);
  return t;
  
  throw 'Not implemented';
  // remove line with error and write your code here
};
