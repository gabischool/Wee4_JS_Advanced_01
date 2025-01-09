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

// function calculateLateFee() {
    
//    let days = prompt("what is the number of overdue days?")
    
//    return  (parseFloat(days)* 0.25).toFixed(2);
// }
//  console.log("The late fee is $" + calculateLateFee()+ "." )

// Extra Task:
// - Convert the function into a function expression.



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

// function findColorMeaning(coloR) {
//      if(coloR == "Blue"){
//          console.log("Blue: You love calm and peace.")
//      } else if(coloR == "Red"){
//          console.log("Red: You are passionate and bold.")
         
//      } else if(coloR == "Green"){
//          console.log("Green: You are connected to nature.")
//      }else if(coloR == "Yellow"){
//          console.log("Yellow: You radiate happiness and energy.")
//      }else{
//          console.log(coloR + " That's a unique choice!")
//      }
    
// }
// const favColor= prompt(" what is your favorite color?")
// findColorMeaning(favColor)

// Extra Task:
// - Rewrite the function using an arrow function.


// const findColorMeaning2 = (coloR)=> {
//      if(coloR == "Blue"){
//          console.log("Blue: You love calm and peace.")
//      } else if(coloR == "Red"){
//          console.log("Red: You are passionate and bold.")
         
//      } else if(coloR == "Green"){
//          console.log("Green: You are connected to nature.")
//      }else if(coloR == "Yellow"){
//          console.log("Yellow: You radiate happiness and energy.")
//      }else{
//          console.log(coloR + " That's a unique choice!")
//      }
    
// }
// const favColor2= prompt(" what is your favorite color?")
// findColorMeaning2(favColor2)
    
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

// function caseLog(name, caseNumber) {
//     console.log("Case #" + caseNumber + ": " + name + "'s case is now logged." )
    
// }
// const caseName = prompt("what is the client's Name?")
// const casenumber = Number(prompt("what is the client's case number?"))

//     caseLog(caseName, casenumber);

// // Extra Task:
// // - Rewrite the function as an arrow function.

// const caseLog2 = (name, caseNumber) =>{
//     console.log("Case #" + caseNumber + ": " + name + "'s case is now logged." )
    
// }
// const caseName2 = prompt("what is the client's Name?")
// const casenumber2 = Number(prompt("what is the client's case number?"))

//     caseLog2(caseName2, casenumber2);

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

// function markAttendance(stdntName, isPresent) {
//     if(isPresent == true){
//         console.log(stdntName + "is present ")
//     }else{
//        console.log(stdntName + "is absent "  ) 
//     }
// }
// const name = prompt("what is the student's name?")
// //let ispresent = true;
// let ispresent = prompt("is the student in the class?")
// markAttendance(name, ispresent)
// Extra Task:
// - Convert the function into a function expression.



/*
STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

You are a teacher, and you want to automate the creation of detailed grade reports for your class. 
Write a program that includes the following steps:

1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and 
returns the average of those scores.

2. Write another function called `determineGrade` that takes the average score as a parameter and 
returns the letter grade based on the following rules:
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

function calculateAverage(test1, test2, test3) {
   let average = (test1 + test2 + test3)/3;
   return average;
   
}

function determineGrade(average){
   if(average >= 90){
      return "Grade: A"
   }
   else if(average <= 89 & average >= 80){
      return "Grade: B"
   }
   else if(average <= 79 & average >= 70){
      return "Grade: C"
   }
   else if (average < 70){
    return "Grade: F"
   }
   
}

function generateReport(stName, test1a, test2a, test3a) {
   const result = calculateAverage(test1a,test2a,test3a)
   const gradeLetter = determineGrade(result);
   console.log("Name: " + stName +" Scores:  "+  test1a + ", " + test2a + ", "
               + test3a +  " grade letter is " + gradeLetter  )
}

const numberOfstudents = Number(prompt("How many report do you want to generate? Please enter the number: "));

if(numberOfstudents != Number){
   console.log ("please give numbers values only.")
}
let counter = 0;

while (counter < numberOfstudents){

let studenTname = prompt("what is the student's name?")
let score1 = Number(prompt("what is the first Score?"))
let score2 = Number(prompt("what is the second Score?"))
let score3 = Number(prompt("what is the third Score?"))

generateReport(studenTname, score1, score2, score3)
   counter++;
}