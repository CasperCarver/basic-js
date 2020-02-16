module.exports = function countCats(/* matrix */) {
  module.exports = function countCats(arr) {
    let cat ="^^";
    let count = 0;
    for (let i=0; i<arr.length;i++){
      if (arr[i]==cat){
        count+=1;
      }
    }
    return count>0?count:0;
    throw 'Not implemented';
  };
};
