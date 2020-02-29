module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //  throw 'Not implemented';
    let obj={
        
    };

    obj.turns=Math.pow(2,disksNumber)-1;
    obj.seconds=obj.turns/(turnsSpeed/3600);
    return obj;
    
    
    // remove line with error and write your code here
}
// let disksNumber=414,
//     turnsSpeed=19279842;

// let obj={
    
// };
// //turnsSpeed=turnsSpeed/3600;
// obj.turns=Math.pow(2,disksNumber)-1;
// obj.seconds=obj.turns*3600/turnsSpeed;
// console.log(obj);