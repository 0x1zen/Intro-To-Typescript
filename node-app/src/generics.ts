
function main<T>(arr:T[]){
return arr[0];
}
// interface User{
//     name:string
// }
const val1=main<number>([1,2,3,4]);
const val2=main<string>(["a","b"]);

// type Input=string | number;

// function main(arr:string[] | number[]){

// }
// main(["afsdhb","yhuasdf",3,54,67]);
// const value=main([3,54,67]);
// value.toUpperCase();