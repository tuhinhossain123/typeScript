{
  //Constrain

  const addCourseToStudents = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudents<{
    id: number;
    name: string;
    email: string;
    hasWatch: string;
  }>({
    id: 123,
    name: "Mr. X",
    email: "Mr.X@gmail.com",
    hasWatch: "Apple",
  });
  const student2 = addCourseToStudents<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 21,
    name: "Mr. X",
    email: "Mr.X@gmail.com",
    devType: "NLB",
  });

  //
}
