{
  //OOP class

  class Animal {
    constructor(
      public name: string,
      public specis: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German shapard", "dog", "ghew ghew");
  dog.makeSound();

  //
}
