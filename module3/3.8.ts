{
  //polymorophisom
  class Person {
    getSleep() {
      console.log("I am slepping for 8 hours per day");
    }
  }
  class Student extends Person {
    getSleep() {
      console.log("Student slepping for 6 hours per day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("Developer slepping for 4 hours per day");
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();
  //   getSleepingHours(person3)

  class Shape {
    getAria(): number {
      return 0;
    }
  }
  // cercle
  class Cercle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getAria(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  //   Reactangle
  class Reactangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getAria(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getAria());
  };

  const shape1 = new Shape();
  const shape2 = new Cercle(12);
  const shape3 = new Reactangle(10, 2);
  getShapeArea(shape2)

  //
}
