{
  //type alies extends

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole1 = {
    name: "Tuhin Hossain",
    age: 12,
    role: "admin",
  };

  //interface extends

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "Tuhin Hossain",
    age: 12,
    role: "admin",
  };

  //
}
