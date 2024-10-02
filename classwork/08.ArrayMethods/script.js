// map,filter,slice,findIndex,sort,reverse,push,pop,unshift,shift



// push - to add end of the array 
// pop - remove last item from array
const obj = {}
// users.push('Ali', 'Fidan', 7, true, undefined, obj, false, null, NaN)
// const deletedItem = users.pop()
// users.pop()
// users.pop()
// users.pop()
// console.log('users', users)
// console.log('deletedItem', deletedItem)

// users.shift()
// users.unshift('Aliriza', 'Gunel', 'Nihad')
// console.log('users', users)

// unshift - add item to in front of array
// shift - remove item in front of array

// console.log('users', users)
// users.shift()
// users.shift()
// users.shift()
// console.log('users', users)

// splice
// const result = [...users.slice(0, 1), ...users.slice(2)]
// const splicedData = users.splice(2, 3)
// console.log('users', users)
// console.log('splicedData', splicedData)


// slice - String, Array
// splice - Array
// console.log(users);

// const user1 = users.slice(0, 2)
// const user2 = users.slice(2).reverse()
// console.log('user1', user1)
// console.log('user2', user2)
// const result = user1.concat(user2)
// console.log('users', users)
// console.log('result', result)
// users.slice(2).reverse()
// console.log('reversed', users);


// splice,reverse,sort,(pop,push,shift,unshift)
// const users = ['Sabir', 'Fatime', 'Gunel', 'Cavid', 'Xanlar', 9, 10, 11]
// sort (asc, desc)
// numbers.sort((a, b) => a - b) //asc
// numbers.sort((a, b) => b - a) //desc

// numbers.sort((a, b) => {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// })

// console.log('numbers', numbers)

// const numbers = [4, 6, 7, 7, 2, 12, 1999, 11111111111111, 10, 22, 9, 0, 1, 1, 40]

// const newArr = []
// for (let i = numbers.length - 1; i >= 0; i--) {
//     newArr.push(numbers[i]);
// }

// console.log('newArr', newArr)

// ES5 - ES12(ECMAScript5)


// const result = numbers.filter((item, index) => item > 2000000000000000)
// const result2 = numbers.find((item, index) => item > 4000000000000000)

// console.log('result', result)
// console.log('result2', result2)

// const users = ['b', 'c', 'a', 'b', 'f', 'z', 'a']
// users.sort((sabir, ulfat) => ulfat.localeCompare(sabir))   //(a - b) //asc
// // users.sort((a, b) => b.localeCompare(a))   //(b - a) //desc
// console.log('users', users)



// const numbers = [9, 5, 3, 11, 12, 33, 22, 9, 11, 10, 0, 8]

// 1.reverse 'numbers'
// 2.sort asc
// 3.sort desc
// 4.splice '11' to '22' (11,12,33,22)
// 5.find first number which is equal 11
// 6.filter numbers which is greater 10
// 7.push 66 and 77 to 'numbers' array (end)
// 8.remove 4 items from 'numbers' (end)
// 9.remove 2 items (front)
// 10.add 0,1,2 to 'numbers' (front)

// const letters = [2, 'a', 5, 11, 'b', 'f', 'd', 6, 1]
// 11.sort asc
// 12.sort desc



// letters.sort((a, b) => {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a - b
//     } else if (typeof a === 'string' && typeof b === 'string') {
//         return a.localeCompare(b)
//     }
//     return typeof a === 'number' ? -1 : 1
// })

// console.log('letters', letters)

// if (7 > 8) {
//     console.log('success')
// } else {
//     console.log('success')
// }


// 11 > 8 ? console.log('success') : console.log('fail');


// filter,reverse,splice,map,slice,sort,shift,unshift,pop,push,find,includes,findIndex,concat,at
// reduce,flat,some,every

// const arr = [6, 3, 'Ulfat', 'a', true, 'a']
// arr.splice(3, 0, 'Fidan')
// console.log('arr', arr)
// const result = arr.findIndex(item => item === 'a')
// const result2 = arr.find(item => item === 'a')
// console.log('result', result)
// console.log('result2', result2)

// const nums = [5, 3, 7, 8, 9, 13]
// const a = [55]
// const c = [...b, ...a]
// console.log('c', c)

// const result = nums.every((num) => 13 > 2)
// const result2 = nums.some((num) => num > 110)
// console.log('result', result)
// console.log('result2', result2)


// console.log(Math.min(...nums) * Math.max(...nums));

// nums.sort((a, b) => a - b)
// console.log(nums[0] * nums[nums.length - 1]);

// '...' - spread and rest

// const users = ['Sabir', ['Fatime', ['Gunel', ['f', [9]]], 'Eliriza'], 'Rufet', 'Eli']

// console.log(users.flat(Infinity))


// const numbers = [9, 5, 3, 11, 12, 33, 22, 9, 11, 10, 0, 8]

// let sum = 0
// numbers.map((item) => sum += item)
// console.log('sum', sum)

// const sum2 = numbers.reduce((acc, item) => acc * item, 0)
// console.log('sum2', sum2)



