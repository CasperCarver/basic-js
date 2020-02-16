  module.exports = function countCats(arr) {
    let cat ="^^";
    let count = 0;
    for (let i=0; i<arr.length;i++){
      for(let c=0;c<arr[i].length;c++){
        if (arr[i][c]==cat){
          count+=1;
        }
      }
      
    }
    return count>0?count:0;
    //throw 'Not implemented';
  };

