// For loop that prints 1-20
/*for(let i = 1; i <= 20; i++) {
    console.log(i)
};

// For loop that logs 1-20 tripled
for(let i = 1; i <= 20; i++) {
    console.log(i * 3)
};

for(let i = 1; i <= 20; i++) {
    if(i % 2 !== 0) {
        console.log("odd")
    } else {
        console.log(i);
    }
}*/

// For loop that logs highest number in array
//var nums = [3, 57, -9, 20, 67];
/*let currentIndex = 0; 
for(let i = 0; i < nums.length; i++) {
    if(currentIndex < nums[i]) {
        currentIndex = nums[i]
    }
}
console.log(currentIndex)*/

// For log that logs the lowest number in array

/*let currentIndex2 = 0;
for(let i = 0; i < nums.length; i++) {
    if(currentIndex2 > nums[i]) {
        currentIndex2 = nums[i]
    }
}

console.log(currentIndex2);

// For loop that lgs remainder of each number when divided by 2
for(let i = 0; i < nums.length; i++){
    console.log(nums[i] % 2);
} 

var myString = "learn student";
let numOfE = 0;
for(let i = 0; i < myString.length; i++) {
    if(myString[i] == "e") {
        numOfE++
    }
}
console.log(numOfE); 

for(let i = 0; i <= 15; i++) {
    if(i % 2 !== 0) {
        console.log(i + " is odd")
    } else {
        console.log(i + " is even");
    }
} */


for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
}




