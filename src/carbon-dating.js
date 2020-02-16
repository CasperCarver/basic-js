

module.exports = function dateSample(N) {
  const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
  if (typeof N !== "string"){
    return false;
  }
  N = N.match(/\d+/g);
  if (N==null){
     return false;
  }
  N=N.join();
  N= parseFloat(N); 
    if ( N >15 || N<0 ){
      return false;
    }
   let t = Math.log(MODERN_ACTIVITY/N)/(0.693/HALF_LIFE_PERIOD);
   return Math.ceil(t);
  
};

 let N='9.122605776326203';
if (typeof N !== "string"){
  console.log (false);
} else console.log(true);
let F = N.match(/\d+\.\d+/g);
if (F==null){
  if (N.match(/\d+/g)==null)
  console.log(false)
} else
N=F.join();
console.log(N);
N= parseFloat(N);

console.log(typeof(N));
console.log(N);
if ( N >15 || N<0  ){
   console.log(false);
} else console.log(true);
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

let t = Math.log(MODERN_ACTIVITY/N)/(0.693/HALF_LIFE_PERIOD);
  console.log(Math.ceil(t));