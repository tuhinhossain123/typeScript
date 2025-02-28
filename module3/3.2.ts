{
  // OOP-Inheritace
  class Person {
    id: number;
    name: string;
    email: string;
    contact: string;
    constructor(id: number, name: string, email: string, contact: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.contact = contact;
    }
    geetSleep(sleepOfHours: number) {
      console.log(`${this.name} will sleep for ${sleepOfHours}`);
    }
  }

  class Student extends Person {
    constructor(id: number, name: string, email: string, contact: string) {
      super(id, name, email, contact);
    }
  }

  const student = new Student(
    123,
    "Tuhin Hossain",
    "abc@gmail.com",
    "0 192838"
  );

  //   Teacher class

  class Teacher extends Person {
    address: string;
    designation: string;
    constructor(
      id: number,
      name: string,
      email: string,
      address: string,
      contact: string,
      designation: string
    ) {
      super(id, name, email, contact);
      this.address = address;
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take class ${numOfClass}`);
    }
  }

  const teacher = new Teacher(
    123,
    "Rony",
    "abc@gmail.com",
    "Cumilla",
    "0 192838",
    "profesor"
  );

  

  //
}
