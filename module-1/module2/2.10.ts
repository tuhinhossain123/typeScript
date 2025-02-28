{
  //utilitis type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: number;
  };
  //   pick
  type ageName = Pick<Person, "name" | "contact">;

  //   omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //   required
  type PersonRequierd = Required<Person>;

  // partial
  type PersonPartial = Partial<Person>;

  //   readony
  type PresonReadonly = Readonly<Person>;

  const person1: PresonReadonly = {
    name: "Tuhin",
    age: 12,
    contact: 12345,
  };

  //
}
