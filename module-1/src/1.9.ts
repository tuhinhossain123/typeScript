{
  //
  // type alies
  type User = {
    name: string;
    age: number;
    address: string;
    contact: string;
  };

  const user: User = {
    name: "Tuhin Hossain",
    age: 23,
    address: "cumilla",
    contact: "01835143562",
  };

  // string type alias
  type Names = string;
  const name: Names = "Tuhin Hosain";

  // funtion type alies

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
  //
}
