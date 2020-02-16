const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(N) {
  if (typeof N !== "string"){
    return false;
  }
   N=Number(N); 
   if ( N >15 || N<0 ){
      return false;
   }
  // t = Math.log(MODERN_ACTIVITY/N)/(0.693/HALF_LIFE_PERIOD);
  // return Math.ceil(t);
  
};

// let N=false;

// if (typeof N !== "string"){
//   console.log (false);
// } else console.log(true);
