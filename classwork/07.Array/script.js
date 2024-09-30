// There are two ways to create Array

// Object
const obj1 = new Object()
const obj2 = {
    num1: 1,
    num2: 2,
    num3: 3,
    arr2: [1, 2, 3, 4, 5, 6]
}

// Array
const arr1 = new Array()
const arr2 = ['Sabir', 'Samir', 'Mehman', 'Polat', 'Rufet']

// console.log(arr2[2]);
// console.log(arr2.at(2));

// console.log(arr2.at(-2));
// console.log(arr2[arr2.length - 2]);

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].startsWith('S')) {
        console.log(arr2[i]);
    }
}
console.log(' ');

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].includes('a')) {
        console.log(arr2[i]);
    }
}


const nums = [4, 5, 7, 8, 10, 33, 0]

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) {
        console.log(nums[i]);
    }
}

let sum = 0
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
}
console.log('sum', sum)


// 1.Mult nums
// 2.select numbers between 5 and 10
// 3.select only true numbers
// 4.sum only odd numbers
// 5.mult only even numbers