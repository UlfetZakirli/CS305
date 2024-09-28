// Object

// let firstName = 'Fidan';
// let lastName = 'Fidanli';
// let age = 20;
// let uni = 'BDU';
// let loc = 'Baku, Azerbaijan';
// console.log(firstName, lastName, age, uni, loc);



// There are two ways to create objects
// const obj1 = {}  //literal
// const obj2 = new Object()  //constructor


// non-primitive - Object(object,array,function,date,Error etc...)
const student = {
    firstName: 'Fidan',
    lastName: 'Fidanli',
    'father-name': 'Azer',
    99: 20,
    year: 2024,
    uni: 'BDU',
    isAdmin: false,
    fin: undefined,
    tax: null,
    address: {
        city: 'Baku',
        address: {
            test: 'test'
        },
        country: 'Azerbaijan',
        extra: {
            street: 'Nizami 14'
        }
    },
    email: 'fidan@gamil.com'
}

// console.log('before', student);
// delete student.firstName

// student.personalInfo = {}
// student.personalInfo.salary = '1000';
// console.log('student', student)

// console.log('after', student.firstName);







// console.log(Object.keys(student));
// console.log(Object.values(student));

// Task
// 1.Loop key (for in)
// 2.Loop values (for in)

// for (let key in student) {
//     console.log(key)
// }

// for (let key in student) {
//     console.log(student[key])
// }



// console.log(student[99]);
// console.log(student['father-name']);





// console.log(student["father-name"]);
// console.log(student);
// console.log(student.firstName);
// console.log(student['firstName']);


// console.log(student.address.city);
// console.log(student.email);
// console.log(student.address.country);


// console.log([]);

// console.log('Fidan');


// by value, by referance
let a = 4
let b = 4
console.log('primitive', a === b);

const obj1 = {
    name: 'Ulfat',
    address: {
        city: 'Baku'
    }
}

const obj2 = { ...obj1 }
obj2.name = 'Rufet'

// const obj2 = { ...obj1 }
obj2.address.city = 'Gence'

// console.log('test', obj1 === obj2)
console.log('obj1', obj1)
console.log('obj2', obj2)

console.log(obj1.address === obj2.address);  //true
console.log(obj1 === obj2); //false






