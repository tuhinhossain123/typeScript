{
  //

  type GenericArray<T> = Array<T>;

  const numbers: GenericArray<number> = [1, 2, 3, 4, 5];
  const numbers1: GenericArray<string> = ["1", "2", "3", "4", "5"];
  const numbers2: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Tuhin",
      age: 23,
    },
    {
      name: "AFi",
      age: 23,
    },
  ];

  //   genereric tuple

  type GenericArr<X, Y> = [X, Y];

  const tuhin: GenericArr<string, number> = ["Tuhin Hossain", 32];

  //
}
