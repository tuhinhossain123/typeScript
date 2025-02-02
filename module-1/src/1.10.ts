{
  //  union   type

  type Money = "Audi car" | "bike";
  const amrTk: Money = "Audi car";

  // intersection

  type FrontEndDeveloper = {
    skills: string[];
    role1: "Frontend end developer";
  };
  type BackEndDeveloper = {
    skills: string[];
    role2: "Back end developer";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["js", "next js"],
    role1: "Frontend end developer",
    role2: "Back end developer",
  };
}
