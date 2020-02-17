

module.exports = function dateSample(N) {
  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;
  if (typeof N !== "string"){
    return false;
  }

  let F = N.match(/\d+\.\d+/g);
  if (F==null){
    N=N.match(/\d+/g);
    if (N==null){
      return false;
    } else{
      N = N.join();
      N = parseFloat(N);
      if (N == "NaN"){
          return false;
      }
      if ( N > 15 || N < 0 || N==0 || N==5){
        return false;
      };
          let t = Math.log(MODERN_ACTIVITY/N)/(0.693/HALF_LIFE_PERIOD);
           return Math.ceil(t);
  
    }
  
    } else
        N = F.join();
        N = parseFloat(N);
        if (N == "NaN"){
          return false;
        }
        if ( N > 15 || N < 0 || N == 0){
          return false;
        };
        let t = Math.log(MODERN_ACTIVITY/N)/(0.693/HALF_LIFE_PERIOD);
        return Math.ceil(t);
  
};





// let N='3.142';
// if (typeof N !== "string"){
//   console.log (false);
// } else console.log(true+ ' это строка');

// const MODERN_ACTIVITY= 15; 
// const HALF_LIFE_PERIOD= 5730;
// let F = N.match(/\d+\.\d+/g);
// console.log(F);

// if (F==null){
//   N=N.match(/\d+/g);
//   if (N==null){
//     console.log(false);
//   } else{
//     N = N.join();
//     N = parseFloat(N);
//     if (N == "NaN"){
//         console.log (false);
//     }
//     if ( N > 15 || N < 0 ){
//       console.log(false);
//     };
//         let t = Math.log(MODERN_ACTIVITY/N)/(0.693/HALF_LIFE_PERIOD);
//         console.log(Math.ceil(t));

//   }

//   } else
//       N = F.join();
//       N = parseFloat(N);
//       if (N == "NaN"){
//         console.log (false);
//       }
//       if ( N > 15 || N < 0 ){
//         console.log(false);
//       };
//       let t = Math.log(MODERN_ACTIVITY/N)/(0.693/HALF_LIFE_PERIOD);
//         console.log(Math.ceil(t));