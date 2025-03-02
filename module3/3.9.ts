{
  //OOP Abstraction

  //   idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  // real implement
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("I am staring the car");
    }
    stopEngine(): void {
      console.log("I am stoping the car");
    }
    move(): void {
      console.log("I am moving the car");
    }
    test(): void {
      console.log("I am testing the car");
    }
  }

  const audiCar = new Car();
  audiCar.startEngine();

  //   abstruc class

  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    abstract test(): void;
  }

  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log("I am staring the car");
    }
    stopEngine(): void {
      console.log("I am stoping the car");
    }
    move(): void {
      console.log("I am moving the car");
    }
    test(): void {
      console.log("I am testing the car");
    }
  }

  const marcidisCar = new Vehicle2();
  //
}
