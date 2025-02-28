{
  // instance of gurd

  class Animal {
    name: string;
    specis: string;
    constructor(name: string, specis: string) {
      this.name = name;
      this.specis = specis;
    }
    makeSound() {
      console.log("I am making sound");
    }
  }

  class Cat extends Animal {
    constructor(name: string, specis: string) {
      super(name, specis);
    }
    makeMeaw() {
      console.log("Cat is Mewing");
    }
  }
  class Dog extends Animal {
    constructor(name: string, specis: string) {
      super(name, specis);
    }
    makeBark() {
      console.log("Dog is Ghew Ghew");
    }
  }

  //   smart way te handle korte chaile amra function use korte pari

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isCat(animal)) {
      animal.makeMeaw;
    } else if (isDog(animal)) {
      animal.makeBark;
    } else {
      animal.makeSound;
    }
  };

  const cat = new Cat("Parsian", "Cat");
  const dog = new Dog("German Shepard", "dog");
  getAnimal(cat);

  //
}
