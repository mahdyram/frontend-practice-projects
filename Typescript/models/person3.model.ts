type Person3 = {
  firstName: string;
  lastName: string;
  isStudent: boolean;
};

export type Student = {
  person: Person3;
  studentId: number;
  className: string;
};
