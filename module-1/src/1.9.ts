{
  // type alias

  type Student = {
    id: number;
    name: string;
    age: number;
    phone?: string;
  };

  const student1: Student = {
    id: 12,
    name: "Tuhin hossain",
    age: 23,
  };
  const student2: Student = {
    id: 12,
    name: "Tuhin hossain",
    age: 23,
  };
  const student3: Student = {
    id: 12,
    name: "Tuhin hossain",
    age: 23,
    phone: "02938956467",
  };

  //   string alias

  type User = string;
  const name: User = "tuhin";

  //   function alias
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
