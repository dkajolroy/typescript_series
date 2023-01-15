// Enum, Union and predefined types

//Union types
let value: string | number;
value = 55;
console.log(value);

//Predefined types
let name: string = "Kajol";
console.log(name);

//Enum types
type EnumType = "a" | "b" | "c" | "d";
let user: EnumType;
user = "b";
console.log(user);

export {};
