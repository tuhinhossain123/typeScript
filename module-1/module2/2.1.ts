{
  //
  // type agertion
  let anything: any;
  anything = "Tuhin Hossain";
  anything = false;
  anything = 12;
  (anything as number).toString;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValu = parseFloat(value) * 1000;
      return `The Convertd Value is ${convertedValu}`;
    } else {
      return value * 1000;
    }
  };

  const result1 = kgToGm(10) as number;
  const result2 = kgToGm('12') as string;

  //
}
