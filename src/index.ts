//Functions types

//Not returning functions system 1
let func: () => void;
func = () => {
  console.log("OK-1");
};
func();
//Not returning functions system 2
let func2 = (): void => {
  console.log("OK-2");
};
func2();

// Returning functions
const rFunc = (a: number, b: number): number => {
  return a + b;
};
console.log(rFunc(1, 2));

export {};
