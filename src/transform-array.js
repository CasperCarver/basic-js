module.exports = function transform( arr ) {
    
    if (!Array.isArray(arr)){
        throw "Not implement";
    }

    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] != "--discard-prev" && arr[i] != "--double-prev" && arr[i] != "--double-next" && arr[i] != "--discard-next") {
            newArr.push(arr[i]);
        } else if (arr[i] == "--discard-next" && i < arr.length - 1) {
            i += 1;
        } else if (arr[i] == "--discard-prev" && i > 0) {
            newArr.pop();
        } else if (arr[i] == "--double-next" && i < arr.length - 1) {
            newArr.push(arr[i + 1]);
        } else if (arr[i] == "--double-prev" && i > 0) {
            newArr.push(arr[i - 1]);
        }
    };
    return newArr;
};



let arr = ["--discard-next" , false, 'DEF', "--double-next", 1, 1, '8.963' ];
function transf(arr){

for (i = 0; i < arr.length; i++){
    if ( arr[i] == "--double-next"){
        if (i==arr.length-1){
            arr.splice(i, 1);
        } else{
            arr[i]=arr[i+1];
        }
        
    } else if( arr[i]=="--double-prev"){
        if (i==0){
            arr.splice(i, 1);
            console.log(arr);
        } else{
            arr[i]=arr[i-1];
    }
    } else if (arr[i]=="--discard-next"){
        if(i==arr.length-1){
            console.log(arr);
        } else{
            arr.splice(i, 2);}
    } else if (arr[i]=="--discard-prev"){
        if (i==0){
            arr.splice(i, 1);
            console.log(arr);
        } else{
            arr.splice(i-1, 2);
        }
    }
}
return arr;
};
transf(arr);
console.log(arr);


let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] != "--discard-prev" && arr[i] != "--double-prev" && arr[i] != "--double-next" && arr[i] != "--discard-next") {
            newArr.push(arr[i]);
        } else if (arr[i] == "--discard-next" && i < arr.length - 1) {
            i += 1;
        } else if (arr[i] == "--discard-prev" && i > 0) {
            newArr.pop();
        } else if (arr[i] == "--double-next" && i < arr.length - 1) {
            newArr.push(arr[i + 1]);
        } else if (arr[i] == "--double-prev" && i > 0) {
            newArr.push(arr[i - 1]);
        }
    };


    console.log(newArr);