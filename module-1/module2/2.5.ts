{
  //Generic With Function

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayGeneric = <T>(param: T): T[] => {
    return [param];
  };

  type GenericObj = {
    id: number;
    name: string;
    address: string;
  };
  const res1 = createArray("hello");
  const res2 = createArrayGeneric<string>("hello");
  const res3 = createArrayGeneric<GenericObj>({
    id: 123,
    name: "Tuhin",
    address: "cumilla",
  });

  //   generic Tuple
  const createArrayTuple = (
    param: string,
    param3: number
  ): [string, number] => {
    return [param, param3];
  };
  const createArrayGenericTuple = <T, A>(param1: T, param2: A): [T, A] => {
    return [param1, param2];
  };

  type GenericOb = {
    id: number;
    name: string;
    address: string;
  };
  const res11 = createArrayTuple("hello", 12);
  const res22 = createArrayGenericTuple<string, number>("hello", 312);
const res33 = createArrayGenericTuple<GenericOb, boolean>({
    id: 123,
    name: "Tuhin",
    address: "cumilla",
  }, false);

  //
}
