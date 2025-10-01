// ========================================
// Intro

let fName: string = "ali";
console.log(fName);

// fName = 32  =>  Type 'number' is not assignable to type 'string'.

// --------------------

let fName2: string | number = "ali";
console.log(fName2);

fName2 = 32;
console.log(fName2);

// --------------------

const user = (firstName: string, lastName: string, age: number) => {
  console.log(firstName, lastName, age);
};

user("ali", "ram", 33);

// ----------------------------------------

type Person1 = {
  firstName: string;
  lastName: string;
  age: number;
};

const userInfo = (person: Person1) => {
  console.log(person.firstName, person.lastName, person.age);
};

userInfo({
  firstName: "ali",
  lastName: "ram",
  age: 24,
});

// --------------------

import { Person2 } from "./models/person2.model";

const userInfo2 = (person: Person2) => {
  const { firstName, lastName, age = 18 } = person;

  console.log(firstName, lastName, age);
};

userInfo2({
  firstName: "ali",
  lastName: "ram",
});

userInfo2({
  firstName: "ali",
  lastName: "ram",
  age: 26,
});

// --------------------

import { Student } from "./models/person3.model";

const userInfo3 = (student: Student) => {
  const { person, studentId, className } = student;
  const { firstName, lastName, isStudent } = person;

  console.log(`hello ${firstName} ${lastName}`);
  if (isStudent) {
    console.log(`you are studying in class ${className}`);
  }
};

userInfo3({
  person: {
    firstName: "ali",
    lastName: "ram",
    isStudent: true,
  },
  studentId: 34252,
  className: "B3",
});
