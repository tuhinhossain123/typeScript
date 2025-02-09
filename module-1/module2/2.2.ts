{
  //

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole = User1 & { role: string };

  const user1: UserWithRole = {
    name: "Tuhin Hossain",
    age: 21,
    role: "admin",
  };

  // interface

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user2: UserWithRole2 = {
    name: "Tuhin Hossain",
    age: 21,
    role: "Admin",
  };

  type Roll = [];

  interface Roll2 {
    [index: number]: number;
  }

  const numbers: Roll2 = [1, 3, 4, 5, 6, 7];

  //
}
