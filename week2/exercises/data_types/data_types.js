// Kajol sutra dhar
/*
- Create a variable named age and assign it an integer value.
- Create a variable named name and assign it a string value.
- Create a variable named isStudent and assign it a boolean value.
- Create a variable named hobbies and assign it an array containing a few string values (e.g., hobbies).
- Create an info object with two properties: schoolName (a string) and grade (an integer).

- Use console.log() to print each variable to the console.

- Use the typeof operator to check the data type of each variable and print the result using console.log(). */

let age = 20;
let name = "Sree";
let isStudent = true;

const hobbies = ["Football", "Basketball", "Travel"];

const info = {
  schoolName: "Business College Helsinki",
  grade: "S",
};

console.log(
  `Name: ${name} --> Type: ${typeof name},\nAge: ${age} --> Type: ${typeof age},\nStudent Status: ${isStudent} --> Type: ${typeof isStudent} \n`
);

console.log(`Hobbis: Type --> ${typeof hobbies}
${hobbies[0]} --> Type: ${typeof hobbies}
${hobbies[1]} --> Type: ${typeof hobbies}
${hobbies[2]} --> Type: ${typeof hobbies}\n`);

console.log(`Info: Type: --> ${typeof info}
School Name: ${info.schoolName} --> Type: ${typeof info.schoolName}
Grade: ${info.grade}  --> Type: ${typeof info.grade}\n`);

/*
            Out put
-------------------------------
Name: Sree --> Type: string,
Age: 20 --> Type: number,
Student Status: true --> Type: boolean 

Hobbis: Type --> object
Football --> Type: object
Basketball --> Type: object
Travel --> Type: object

Info: Type: --> object
School Name: Business College Helsinki --> Type: string
Grade: S  --> Type: string
*/
