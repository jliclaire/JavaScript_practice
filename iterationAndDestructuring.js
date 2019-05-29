// Print city name and students number to the screen using object destructuring

const schools = {
  name: "Coder Academy",
  languages: ["Ruby", "JavaScript"],
  cities: [
    {
      name: "Melbourne",
      address: "120 Spencer Street",
      students: 36
    },
    {
      name: "Sydney",
      address: "1 Martin Place",
      students: 30
    }
  ]
};

const { cities } = schools;
for (let { name: cityName, students: studentsNumber } of cities) {
  console.log(`Name: ${cityName} Students: ${studentsNumber}`);
}
//output:
// Name: Melbourne Students: 36
// Name: Sydney Students: 30
