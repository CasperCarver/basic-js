module.exports = function createDreamTeam(arr) {
   if (!Array.isArray(arr)){
    return false;
  }
  let N =[];

for (let i = 0; i<arr.length; i++){
  if (typeof arr[i] == 'string'){
    arr[i]=arr[i].trim().toUpperCase();
    N.push(arr[i][0]);

  } else continue;
  
}
N.sort();
N=N.join('');
return N;
 
   //throw 'Not implemented';
  // // remove line with error and write your code here
};


//  let arr = ['   William Alston ',
//         ' Paul Benacerraf',
//         '  Ross Cameron',
//         '       Gilles Deleuze',
//         '  Arda Denkel ',
//         '  Michael Devitt',
//         '  Kit Fine',
//         ' Nelson Goodman',
//         'David Kolb',
//         '   Saul Kripke',
//         '  Trenton Merricks',
//         '  Jay Rosenberg',];
// let N =[];
// for (let i = 0; i<arr.length; i++){
//   arr[i]=arr[i].trim();
//   console.log(arr[i]);
//   N.push(arr[i][0]);
// }
// N.sort();
// N=N.join('');

// console.log(N);