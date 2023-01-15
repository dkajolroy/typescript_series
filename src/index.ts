// Data types
// String, Number, Boolean, Undefined, Null

//Stings types
let name: string;
name = "ami";
console.log(name);

//Number types
let age: number;
age = 22;
console.log(age);

//Arrays
let user: string[];
user = ["kajol", "Ray"];
console.log(user);

// Array of arrays
let sub: string[][];
sub = [["kajol", "Ray"]];
console.log(sub);

//Object Types
type UserInterface = {
  name: string;
  age: number;
  married: boolean;
  address?: string;
};
let userInfo: UserInterface;
userInfo = {
  name: "Kajol Roy",
  age: 22,
  married: false,
};
console.log(userInfo);

export {};
