{
  // spreed operator

  const friends1: string[] = ["1", "3"];
  const friends2: string[] = ["7", "7"];
  friends1.push(...friends2);

  const phn1 = {
    model: "redmi",
    ram: "8 gb",
    rom: "120 gb",
  };
  const phn2 = {
    model: "samsung",
    ram: "8 gb",
    rom: "120 gb",
  };

  const phnList = {
    ...phn1,
    ...phn2,
  };
}
