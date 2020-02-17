module.exports = function getSeason(d) {
  if (!d){
     return 'Unable to determine the time of year!';
  };
  dm=d.getMonth();
  if (dm>=2 && dm<=4){
    return  'spring';
  } else if ( dm>=5 && dm<=7){
    return 'summer';
  } else if ( dm>=8 && dm<=10){
    return 'autumn';
  } return'winter';
  
  // throw 'Not implemented';
  // remove line with error and write your code here
};


// let d= new Date(1682, 0, 28, 4, 2, 55, 833);
// dm=d.getMonth();
// if (dm>=2 && dm<=4){
//   console.log ('spring');
// } else if ( dm>=5 && dm<=7){
//   console.log ('summer');
// } else if ( dm>=8 && dm<=10){
//   console.log('autumn');
// } else console.log('winter');
// console.log(dm);