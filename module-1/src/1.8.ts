{
  // destrucring

  const user = {
    id: 1,
    names: {
      firstName: "Tuhin",
      middleName: "Hossain",
      lastName: "Tuhin",
    },
    age: 23,
    isRelation: false,
  };

  const {
    id,
    names: { firstName, lastName },
  } = user;
}
