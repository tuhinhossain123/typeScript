{
  //typeof-------- type gurd
  type AlpaNumeric = string | number;
  const add = (param1: AlpaNumeric, param2: AlpaNumeric): AlpaNumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result = add("2", 5);
  console.log(result);

  //   in gurd

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Tuhin Hossain",
  };
  const adminUser: AdminUser = {
    name: "Tuhin Hossain",
    role: "admin",
  };

  const res = getUser(adminUser)
  //
}
