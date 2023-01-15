// Generic
const addExam = <T extends { no: number; sub: string }>(x: T): T => {
  return x;
};

const exam = {
  no: 1,
  sub: "Bangla",
};

console.log(addExam(exam));

export {};
