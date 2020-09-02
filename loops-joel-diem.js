// Logging values with for loops
// for(let i = 0; i < 20; i++) {
//     console.log(i+1);
// }
//
// for(let i = 0; i < 20; i++) {
//     console.log((i+1) * 3);
// }
//
// for(let i = 0; i < 20; i++) {
//     if((i+1) % 2 === 0) {
//         console.log(i+1);
//     } else {
//         console.log("ODD")
//     }
// }

// Looping over an array
// /var nums = [3, 57, -9, 20, 67];
// var biggerNum = 0;
// for (let i = 0; i < nums.length; i++)
// {
//   if (nums[i] > biggerNum){
//     biggerNum = nums[i];
//   }
// }
// console.log(biggerNum);

// for (let i = 0; i < nums.length; i++)
// {
//   if (nums[i] < biggerNum){
//     biggerNum = nums[i];
//   }
// }
// console.log(biggerNum);

// for (let i = 0; i < nums.length; i++)
// {
//   console.log(nums[i] % 2);
// }

var myString = "learn student";
var numE = 0;
for(let i = 0; i < myString.length; i++) {
    if(myString.charAt(i) === "e")
    numE++;
}
console.log(numE);