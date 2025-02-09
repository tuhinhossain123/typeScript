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

  //
}
