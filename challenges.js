/*
Task 1: Library Late Fee Calculator 🚀🚀🚀🚀

You are working at a library and need to calculate late 
fees for overdue books. Write a function called `calculateLateFee` 
that takes the number of overdue days as input and calculates 
the fee ($0.25 per day). Prompt the user to input the
number of overdue days.

Log the result as:

"The late fee is $[amount]."

Example:
User Input: 10
Output: "The late fee is $2.50."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

//const calculateLateFee=function(overdue, money)
//{
//console.log(`The late fee is ${overdue * money}`)


//}
//calculateLateFee(0.25, 10)
// Extra Task:
// - Convert the function into a function expression.


//const calculateLateFee=function(overdue, money){

//return overdue* money 
//}
//console.log(calculateLateFee(.025, 10))

/*
Task 2 : Favorite Color Finder 🚀🚀🚀🚀

You are designing a game that asks players for their favorite color. 
Write a function called `findColorMeaning` that takes a color as input 
(prompt the user) and logs the following meanings:

- "Blue: You love calm and peace."
- "Red: You are passionate and bold."
- "Green: You are connected to nature."
- "Yellow: You radiate happiness and energy."
- For any other color: "That's a unique choice!"

Example:
User Input: "Red"
Output: "Red: You are passionate and bold."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️
const findColorMeaning=function(color){
   let result;
   if (color==="blue"){
   result= "You love calm and peace."
   }else if  (color==="red"){
   result= "You are passionate and bold."
   }else if (color==="green"){
   result= "You are connected to nature."
   }else if(color==="yellow"){
   result= "You radiate happiness and energy."
   }else{
   result= "That's a unique choice!"}
   
   return result;
   }
   console.log(findColorMeaning("red" ))
// Extra Task:
// - Rewrite the function using an arrow function.



/*
Task 3 : Lawyer's Case Log 🚀🚀🚀🚀

You’re a lawyer, and you’ve been assigned to organize your case files. 
Write a function called `logCase` that takes the client's name and 
the case number as parameters. For each case, log:

"Case #[caseNumber]: [clientName]'s case is now logged."

Example:
Input: logCase("John Doe", 12345)
Output: "Case #12345: John Doe's case is now logged."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

const logCase = function(caseNumber, clientsName) {
  return `Case: ${caseNumber} ${clientsName} case is now logged.`;
};

console.log(logCase(12345, "John Doe"));

// Rewriting as an arrow function
const logCaseArrow = (caseNumber, clientsName) => {
  return `Case: ${caseNumber} ${clientsName} case is now logged.`;
};

console.log(logCaseArrow(12345, "John Doe"));
/*
Task 4 : Attendance Tracker 🚀🚀🚀🚀

You’re a teacher tracking student attendance. Write a function called 
`markAttendance` that takes a student’s name and a boolean `isPresent` 
value. If the student is present, log:

"[studentName] is present."

If the student is absent, log:

"[studentName] is absent."

Example:
Input: markAttendance("Amina", true)
Output: "Amina is present."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

const markAttendance= function(studentName, isPresent)
{
let result ;

if(isPresent === true) {
   result=`${studentName} is present`}
else{
   result=`${studentName} is absent`}

   return result;
   
 
}
  const Output= markAttendance("ali", true)

  console.log(Output)



// Extra Task:
// - Convert the function into a function expression.


const markAttendance = (studentName, isPresent) => {
   let result;
 
   if (isPresent === true) {
     result = `${studentName} is present`;
   } else {
     result = `${studentName} is absent`;
   }
 
   return result;
 };
 
 const output = markAttendance("Ali", true);
 console.log(output);
 


/*
STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:

1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.

2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
   - "A" for average scores of 90 and above
   - "B" for scores between 80 and 89
   - "C" for scores between 70 and 79
   - "F" for scores below 70

3. Write a third function called `generateReport` that:
   - Takes a student's name and three test scores as parameters.
   - Uses `calculateAverage` to calculate the average score.
   - Uses `determineGrade` to find the letter grade.
   - Returns a full report string in this format:
     "[StudentName] - Average Score: [average], Grade: [letterGrade]"

4. Finally, use the `prompt` function to input the student’s name and three test scores, and display the generated report using `console.log`.

Example:
User Input:
Name: Amina
Scores: 85, 90, 78

Output:
"Amina - Average Score: 84.33, Grade: B"

Extra Credit:
- Extend the program to accept multiple students' names and scores and generate a report for each student using a loop.
- Use an arrow function for at least one of the functions.
*/


const calculateAverage = function(num1, num2, num3) {
   return (num1 + num2 + num3) / 3;
};


const determineGrade = function(test) {
   if (test >= 90) {
      return "A";
   } else if (test >= 80 && test < 90) {
      return "B";
   } else if (test >= 70 && test < 80) {
      return "C";
   } else {
      return "F";
   }
};


const generateReport = function(StudentName, num1, num2, num3) {
   const average = calculateAverage(num1, num2, num3);
  const grade = determineGrade(average)
   
   return `${StudentName} - Average Score: ${average}, Grade: ${grade}`;
};


const name = prompt("Enter the student's name:");
const score1 = parseFloat(prompt("Enter the first test score:"));
const score2 = parseFloat(prompt("Enter the second test score:"));
const score3 = parseFloat(prompt("Enter the third test score:"));

 
const report = generateReport(name, score1, score2, score3);
console.log(report);