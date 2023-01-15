// OOP

//OOP System 1
class User {
  name: string;
  role: number;
  constructor(name: string, role: number) {
    this.name = name;
    this.role = role;
  }

  log() {
    console.log(this.name, this.role);
  }
}
const kajol = new User("Kajol", 22);
kajol.log();

//OOP System 2
class Student {
  constructor(public name: string, private address: string) {}
  log() {
    console.log(this.name, this.address);
  }
}
const student1 = new Student("Kajol 1", "Lal");
console.log(student1.log());

export {};
