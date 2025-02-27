{
  //
  // spreed operators

  const num1: number[] = [1, 2, 3, 4, 5];
  const num2: number[] = [6, 7, 8, 9, 0];
  num1.push(...num2);

  const tuhu: { name: string; age: number; distric: string } = {
    name: "Tuhin Hossain",
    age: 23,
    distric: "Cumilla",
  };
  const afi: { name: string; age: number; distric: string } = {
    name: "Afrin",
    age: 22,
    distric: "ctg",
  };

  const couple = {
    ...tuhu,
    ...afi,
  };

  //
}
