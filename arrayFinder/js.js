/* 
Given an array of integers, find 
the one that appears an odd number of 
times.

There will always be only one integer 
that appears an odd number of times.

Examples
[7] should return 7, because 
it occurs 1 time (which is odd).
[0] should return 0, because 
it occurs 1 time (which is odd).
[1,1,2] should return 2, because 
it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because 
it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return
, because it appears 1 time (which is odd).
*/

let theArr = [3];
let arr = [0, 1, 0, 1, 0];
let myArray = [1, 2, 2, 3, 3, 3, 4, -1, 4, 3, 3, 3, 2, 2, 1];
let rr = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5];

function findOdd(myarray) {
  if (myarray.length <= 1) {
    return myarray[0];
  } else {
    let b;
    for (const i of myarray) {
      let a = myarray.filter((val) => val === i).length;
      if (a % 2 === 1) {
        b = myarray.indexOf(i);
        break;
      }
    }
    return myarray[b];
  }
}

console.log(findOdd(myArray));
