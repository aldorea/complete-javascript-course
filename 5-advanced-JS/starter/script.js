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

// var years = [1997, 1995, 1987, 2003, 1995];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function maxHeartRate(el) {
//     if(el >= 18 && el <= 81) {
//         return Math.round(266.9 - (9.57 * el));
//     } else {
//         return -1;
//     }
  
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// - Function returning functions

// function  interviewQuestion (job) {
//     if( job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else  {
//         return function(name) {
//             console.log('Hello ' +  name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// teacherQuestion('John');
// teacherQuestion('Mark');
// teacherQuestion('Jane');
// designerQuestion('John');
// designerQuestion('Jane');
// designerQuestion('Mark');

// interviewQuestion('teacher')('Mark');

// -- IIFE

// function game () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(goodLuck);
//     console.log(score >= 5 - goodLuck);
// })(5);


// -- Closures

function retirement(retirementAge) {
    return function(yearofBirth) {
        var a = 'years left until retirement';
        var age = 2016 - yearofBirth;
        console.log((retirementAge - age) - a);
    }
}

var retirementUS = retirement(66);
var retriramentGermany = retirement(65);
var retiramentIceland = retirement(67);

retirementUS(1990);
retriramentGermany(1990);
retiramentIceland(1990);

// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ' Can you explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you tech, ' + name + '?' );
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('John');