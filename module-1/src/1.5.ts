{
  //
  // NON-Primitive data type

  // array
  let numbers: number[] = [1, 2, 3, 4];
  numbers.push(10);

  // object

  const user: {
    readonly name: "Tuhin Hossain";
    age: number;
    married?: boolean;
  } = {
    name: "Tuhin Hossain",
    age: 22,
  };

  // function
  const add = (num1: number, num2: number): number => num1 + num2;

  //
}
