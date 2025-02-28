{
  //conditional types
  type Rony = {
    bike: false;
    car: true;
    plane: string;
  };

  type CheckVechile<T> = T extends keyof Rony ? true : false;
  type hasCar = CheckVechile<"car">;

  //
}
