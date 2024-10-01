////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

// 2.Divide 10 by 2 add result to variables x, and console x:

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

// 5.Console the remainder(%) when 17 is divided by 12.

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence, console result.

////////////// TASK 2 //////////////

// console.log('test1', test); // ?
// {
//     let test = "something"
//     console.log('test2', test); // ?
// }
// console.log('test3', test);  // ?

// console.log('test1', test);  // ?
// {
//     var test = "something"
//     console.log('test2', test); // ?
// }
// console.log('test3', test); // ?

////////////// TASK 3 //////////////

//Find the type of all the following cases

// let name = "Ulfat"
// let surname = Zakirli
// let year = 2000
// year = "2000"
// let city;
// let qualification = null
// let obj = { name: 'ulfat' }
// let arr = ['a', 'b', 'c']

////////////// TASK 4 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)

////////////// TASK 5 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"

const user = {
    email: "ulfat@gmail.com",
    info: {
        gender: "Male",
        loc: {
            city: "Baku",
            street: "Nizami 22",
            education: {
                "uni name": "ADNSU",
            },
        },
    },
};

// 3.console each value of user object
// 4.Console only keys of user
// 5.Console only values of user

const db = proccess.env.DB_URL
const mixedObject = db

// 6.Log only the 'keys' whose values are of type string
// for (let key in user) {
//     if (typeof user[key] === 'string') {
//         console.log(user[key]);
//     }
// }

// dev,
// test,
// pre - pro
// pro

// 7.Log only the 'keys' whose values are of type number
// 8.Log only the 'keys' whose values are of type boolean
// 9.Log only the 'keys' whose values are of type undefined
// 10.Log only the 'keys' whose values are of type object

// 11.Repeat (6,7,8,9,10) tasks but now log 'values'

// let, const are block scope
// var is global scope

// {
//     const num = 9;
//     console.log("num", num);
// }


// const a = 9;
// a = 9
// a = 9
// a = 1
// console.log('a', a)
// a = 9
// a = 19


// {
//     let a = 7
//     console.log('inner', a);
// }

// console.log('outer', a);
