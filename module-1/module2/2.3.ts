{
  //Genereic type

  type Genereic<T> = Array<T>;

  // const numbers: number[] = [1, 2, 3, 4, 5];
  const numbers: Genereic<number> = [1, 2, 3, 4, 5];

  // const str: string[] = ["1", " 2", "3", " 4"];
  const str: Genereic<string> = ["1", " 2", "3", " 4"];

  // const bool: boolean[] = [true, false, true, false];
  const bool: Genereic<Boolean> = [true, false, true, false];

  // generic object
  const user: Genereic<{ name: string; age: number }> = [
    {
      name: "Tuhin Hossain",
      age: 23,
    },
    {
      name: "AFi",
      age: 21,
    },
  ];

  // generic touple
  type GenericTouple<T, Y> = [T, Y];
  const mySelf: GenericTouple<string, number> = ["Tuhin hossain", 12];
  const mySelf2: GenericTouple<number, { name: string; age: number }> = [
    12,
    { name: "tuhin", age: 12 },
  ];
  //
}
