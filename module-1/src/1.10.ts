{
  //union type
  type Money = "audi" | "BMW";
  const myMonney: Money = "audi";

  // intersection type
  type FrontEndDev = {
    skills: string[];
    role: "Front End Developer";
  };
  type BackEndDev = {
    skills: string[];
    role2: "Back End Developer";
  };

  type FullStackDev = FrontEndDev & BackEndDev;

  const developer: FullStackDev = {
    skills: ["HTML", "CSS", 'JS, "Typescript'],
    role: "Front End Developer",
    role2: "Back End Developer",
  };
  //
}
