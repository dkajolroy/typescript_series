"use strict";
// OOP
exports.__esModule = true;
//OOP System 1
var User = /** @class */ (function () {
    function User(name, role) {
        this.name = name;
        this.role = role;
    }
    User.prototype.log = function () {
        console.log(this.name, this.role);
    };
    return User;
}());
var kajol = new User("Kajol", 22);
kajol.log();
//OOP System 2
var Student = /** @class */ (function () {
    function Student(name, address) {
        this.name = name;
        this.address = address;
    }
    Student.prototype.log = function () {
        console.log(this.name, this.address);
    };
    return Student;
}());
var student1 = new Student("Kajol 1", "Lal");
console.log(student1.log());
