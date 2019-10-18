// -- Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1982,
//     job: 'teacher'
// };

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function () {
//     //     console.log(2016 - this.yearOfBirth);
//     // }
// };

// Person.prototype.calculateAge = function () {
//     console.log(2016 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('john', 1458, 'teacher');
// var jane = new Person('Jane', 1897, 'retired');

// john.calculateAge();
// jane.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);



// var personProto = {
//     calculateAge: function () {
//         console.log(2016 - this.yearofBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearofBirth = 1988;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane'},
//     yearofBirth: { value: 1960 },
//     job-- Object create

// var personProto = {
//     calculateAge: function () {
//         console.log(2016 - this.yearofBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearofBirth = 1988;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane'},
//     yearofBirth: { value: 1960 },
//     job: { value: 'designer'}
// });



// -- Primitives vs objects

// Primitives
// var a = 21;
// var b = a;
// a = 46;
// console.log(a, b);

// Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'London'
// };

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
    
// }

// change(age, obj);
// console.log(age);
// console.log(a);
// console.log(obj.city);


// -- Passing functions as arguments

var years = [1997, 1995, 1987, 2003, 1995];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function isFullAge(el) {
    return el >= 18;
}

function calculateAge(el) {
    return 2016 - el;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(266.9 - (9.57 * el));
    } else {
        return -1;
    }
  
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);




