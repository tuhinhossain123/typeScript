{
  //

  let anything: any;

  anything = "My Name is Tuhin Hossain";
  anything = 4807;

  (anything as number).toFixed;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The Converted Value is : ${convertedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const check = kgToGm(32) as number;

  //
}
