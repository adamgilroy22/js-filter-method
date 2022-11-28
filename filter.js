  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21); // Returns people who are 21 and over
console.log(oldEnough); // Prints [ { name: 'Michael', age: 23 } ]

const paul = people.filter(p => p.name === "Paul"); // Filter out just Paul
console.log(paul); // Prints [ { name: 'Paul', age: 18 } ]


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// Not best way to do it
const candidates = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5); // Returns an array with only skills which the student has 5 or more years experience
  return strongSkills.length > 0;
});
console.log(candidates); // Prints object items for Jason and Mark only

// Better way
const has5yearsExp = skill => skill.yrsExperience >= 5; // Function to determine skills with 5 or more years experience
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0; // Returns an array with only skills which the student has 5 or more years experience using the has5yearsExp function

const candidates2 = students.filter(hasStrongSkills); // Filters students by calling hasStrongSkills as the .filter() parameter
console.log(candidates2); // Prints object items for Jason and Mark only