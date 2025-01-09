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


function calculateLateFee(lateFees) {
   // Prompt the user to enter the number of overdue days
   
   let overDueDays = prompt("Enter the number of overdue days:");
   
   overDueDays = Number(overDueDays);
   
    const lateFee = overDueDays * 0.25;
   
   console.log('late fee is', lateFee);
   
 }
 
  calculateLateFee("lateFee");
 




// // Extra Task:
// // - Convert the function into a function expression.


const calculateLateFees = function() 

{

let overDueDays= prompt("Enter the number of over due days");

overDueDays = Number(overDueDays);

let lateFee = overDueDays * 0.25;
  
 console.log('late fee is', lateFee);

};

calculateLateFees();


// /*
// Task 2 : Favorite Color Finder 🚀🚀🚀🚀

// You are designing a game that asks players for their favorite color. 
// Write a function called `findColorMeaning` that takes a color as input 
// (prompt the user) and logs the following meanings:

// - "Blue: You love calm and peace."
// - "Red: You are passionate and bold."
// - "Green: You are connected to nature."
// - "Yellow: You radiate happiness and energy."
// - For any other color: "That's a unique choice!"

// Example:
// User Input: "Red"
// Output: "Red: You are passionate and bold."
// */

// // ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function findColorMeaning() 
{
  
let favColor = prompt("enter your favorite color");
                      
if(favColor === "blue") {
console.log("You love calm and peace.") 
}
else if(favColor === "red") {
console.log("You are passionate and bold")}
  else if(favColor === "green") {
console.log("You are connected to nature.")}
  else if(favColor === "yellow") {
console.log("You radiate happiness and energy.")}
  else {
console.log("That's a unique choice!.")
}

};

findColorMeaning();







// // Extra Task:
// // - Rewrite the function using an arrow function.


const colorMeaning = () =>
   {
     
   let favColor = prompt("enter your favorite color");
     
                         
   if(favColor === "blue") {
   console.log("You love calm and peace.") 
   }
   else if(favColor === "red") {
   console.log("You are passionate and bold")}
     else if(favColor === "green") {
   console.log("You are connected to nature.")}
     else if(favColor === "yellow") {
   console.log("You radiate happiness and energy.")}
     else {
   console.log("That's a unique choice!.")
   }
   
   };
   
   colorMeaning();
   





// /*
// Task 3 : Lawyer's Case Log 🚀🚀🚀🚀

// You’re a lawyer, and you’ve been assigned to organize your case files. 
// Write a function called `logCase` that takes the client's name and 
// the case number as parameters. For each case, log:

// "Case #[caseNumber]: [clientName]'s case is now logged."

// Example:
// Input: logCase("John Doe", 12345)
// Output: "Case #12345: John Doe's case is now logged."
// */

// // ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

// //Function 1

function logCase (name, caseNumber) 
{
console.log("You are now logged into as:",name, 'with the case numberr', caseNumber);

};

logCase('Ali', 2342);

//Function 2

const logCaseTwo =
function(caseNumber,name) 

{
console.log("You are now logged with the case number#", caseNumber,"And the name as ", name,);
            
};

logCaseTwo(12345,'Abdi');







// // Extra Task:
// // - Rewrite the function as an arrow function.


const courtCase = (caseNumber ,name) =>
   { 
   
     console.log('Casenumber#:', caseNumber, name, 'is now logged in');
               
   };
   
   courtCase(123456, 'John');


// /*
// Task 4 : Attendance Tracker 🚀🚀🚀🚀

// You’re a teacher tracking student attendance. Write a function called 
// `markAttendance` that takes a student’s name and a boolean `isPresent` 
// value. If the student is present, log:

// "[studentName] is present."

// If the student is absent, log:

// "[studentName] is absent."

// Example:
// Input: markAttendance("Amina", true)
// Output: "Amina is present."
// */

// // ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function attendance (name, isPresent)

{
  
                      
if(isPresent === true) {
  console.log(name, 'is present'); 
 } 
  
  else {
   
  console.log(name, 'is absent');
    
 }
  
  
};


attendance('Ali', true);





// // Extra Task:
// // - Convert the function into a function expression.

const markAttendance = function(name, isPresent) 

{
  
                     
if(isPresent === true) {
  console.log(name, "is present"); 
 } 
  
  else {
   
  console.log(name, "is absent");
 }
  
};

markAttendance('Ali', false);




// /*
// STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

// You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:

// 1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.
// */

// //Function 1 - Strechgoals

function calculateAverage(testScore1, testScore2, testScore3) {

  
   return (testScore1 + testScore2 + testScore3) / 3;
    
    
  }
 
 const average = calculateAverage(3,12,3);
 
 console.log(average);
 
// /* 

// 2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
//    - "A" for average scores of 90 and above
//    - "B" for scores between 80 and 89
//    - "C" for scores between 70 and 79
//    - "F" for scores below 70

//    */

// //Function 2 - Strechgoals
   function determineGrade(averageScore) 

   {
       if (averageScore >= 90) {
           return "A";
       } else if (averageScore >= 80 && averageScore < 90) {
           return "B";
       } else if (averageScore >= 70 && averageScore < 80) {
           return "C";
       } else {
           return "F";
       }
   }
   
   console.log(determineGrade(70));
   
   

//    /*

// 3. Write a third function called `generateReport` that:
//    - Takes a student's name and three test scores as parameters.
//    - Uses `calculateAverage` to calculate the average score.
//    - Uses `determineGrade` to find the letter grade.
//    - Returns a full report string in this format:
//      "[StudentName] - Average Score: [average], Grade: [letterGrade]"

// 4. Finally, use the `prompt` function to input the student’s name and three test scores, and display the generated report using `console.log`.

// Example:
// User Input:
// Name: Amina
// Scores: 85, 90, 78

// Output:
// "Amina - Average Score: 84.33, Grade: B"

// Extra Credit:
// - Extend the program to accept multiple students' names and scores and generate a report for each student using a loop.
// - Use an arrow function for at least one of the functions.
