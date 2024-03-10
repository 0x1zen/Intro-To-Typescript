"use strict";
function calculateAverage(arr) {
    var average = 0;
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
        count++;
    }
    return average / count;
}
console.log(calculateAverage([4, -3, 5, 3, 9]));
