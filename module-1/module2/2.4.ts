{
  //generic Interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      relaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type PoorDev = {
    name: string;
    model: string;
  };

  const poorDeveloper: Developer<PoorDev> = {
    name: "Tuhin Hossain",
    computer: {
      brand: "DCL",
      model: "core 3",
      relaseYear: 2008,
    },
    smartWatch: {
      name: "emilab",
      model: "kw66",
    },
  };

  type RichDev = {
    name: string;
    model: string;
    sleepTrac: boolean;
  };

  type Bike = {
    name: string;
    einginCapacity: string;
  };
  const richDeveloper: Developer<RichDev, Bike> = {
    name: "Tuhin Hossain",
    computer: {
      brand: "DCL",
      model: "core 3",
      relaseYear: 2008,
    },
    smartWatch: {
      name: "Apple",
      model: "kw66",
      sleepTrac: true,
    },
    bike: {
      name: "Suzuki",
      einginCapacity: "150CC",
    },
  };

  //
}
