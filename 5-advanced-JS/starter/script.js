// Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1982,
    job: 'teacher'
};

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function () {
    //     console.log(2016 - this.yearOfBirth);
    // }
};

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('john', 1458, 'teacher');
var jane = new Person('Jane', 1897, 'retired');


john.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);




