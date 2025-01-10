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
// function calculateLateFee(overdueDays){
//    const feePerDay=0.25;
//    const lateFee=overdueDays * feePerDay;
//    console.log(`The late fee is ${lateFee}`)
// }

// const overdueDays=parseInt(prompt('Enter the number of overdue days:'));

// calculateLateFee(overdueDays)

// Extra Task:
// - Convert the function into a function expression.

// const calculateLateFee=function (overdueDays){
//    const feePerDay=0.25;
//    const lateFee=overdueDays * feePerDay;
//    console.log(`The late fee is ${lateFee}`)
// }

// const overdueDays=parseInt(prompt('Enter the number of overdue days:'));

// calculateLateFee(overdueDays)

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

// function findColorMeaning (color){
//    if(color.toLowerCase() == 'blue'){
//       console.log(`${color}: You love calm and peace.😊`)
//    }else if(color.toLowerCase() == 'red'){
//       console.log(`${color}: You are passionate and bold.😗`)
//    }else if(color.toLowerCase() == 'green'){
//       console.log(`${color}: You are connected to nature.🌴`)
//    }else if(color.toLowerCase() == 'yellow'){
//       console.log(`${color}: You radiate happiness and energy.🤣`)
//    }else{
//       console.log(`That's a unique choice!`)
//    }
// }
// const color=prompt('Enter your favourite color 😍')
// findColorMeaning(color)


// Extra Task:
// - Rewrite the function using an arrow function.

// const findColorMeaning =(color)=>{
//    if(color.toLowerCase() == 'blue'){
//       console.log(`${color}: You love calm and peace.😊`)
//    }else if(color.toLowerCase() == 'red'){
//       console.log(`${color}: You are passionate and bold.😗`)
//    }else if(color.toLowerCase() == 'green'){
//       console.log(`${color}: You are connected to nature.🌴`)
//    }else if(color.toLowerCase() == 'yellow'){
//       console.log(`${color}: You radiate happiness and energy.🤣`)
//    }else{
//       console.log(`That's a unique choice!`)
//    }
// }
// const color=prompt('Enter your favourite color 😍')
// findColorMeaning(color)


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

// function logCase(caseName ,caseNumber){
//  console.log(`Case  #${caseNumber}: ${caseName}'s case is now logged in.`)
// }


// logCase('John Doe',12345)

// Extra Task:
// - Rewrite the function as an arrow function.

// const  logCase=(caseName ,caseNumber)=>{
//    console.log(`Case  #${caseNumber}: ${caseName}'s case is now logged in.`)
//   }
  
  
//   logCase('John Doe',12345)
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

// function markAttendance(studentName, isPresent){
//    if(isPresent){
//       console.log(`${studentName} is present.`)
//    }else {
//       console.log(`${studentName} is absent.`)
//    }
// }

// markAttendance('Amina', false)


// Extra Task:
// - Convert the function into a function expression.

// const markAttendance=function (studentName, isPresent){
//    if(isPresent){
//       console.log(`${studentName} is present.`)
//    }else {
//       console.log(`${studentName} is absent.`)
//    }
// }

// markAttendance('Amina', false)


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


const calculateAverage=(score1,score2,score3)=>{
      return (score1 + score2 +score3) / 3; 
}


const determineGrade=(averageScore)=>{
   if(averageScore >=90){
      return 'A';
   }else if(averageScore >=80 ){
      return 'B'
   }else if(averageScore >=70){
      return 'C';
   }else if(averageScore < 70 ){
      return 'F';
   }
}



const generateReport=(name,score1,score2,score3)=>{
   const averageScore=calculateAverage(score1,score2,score3);
   const grade=determineGrade(averageScore)
   return `${name} - Average Score: ${Math.round(averageScore)}, Grade: ${grade}`;
}


const studentName=prompt(`Enter the student's name:`)
const score1=parseInt(prompt(`Enter the first score:`))
const score2=parseInt(prompt(`Enter the second score:`))
const score3=parseInt(prompt(`Enter the third score:`))


const fullReport=generateReport(studentName,score1,score2,score3)
console.log(fullReport)




// Extra credit:multiple students using loop

// const calculateAverage=(score1,score2,score3)=>{
//       return (score1 + score2 +score3) / 3; 
// }


// const determineGrade=(averageScore)=>{
//    if(averageScore >=90){
//       return 'A';
//    }else if(averageScore >=80 ){
//       return 'B'
//    }else if(averageScore >=70){
//       return 'C';
//    }else if(averageScore < 70 ){
//       return 'F';
//    }
// }



// const generateReport=(name,score1,score2,score3)=>{
//    const averageScore=calculateAverage(score1,score2,score3);
//    const grade=determineGrade(averageScore)
//    return `${name} - Average Score: ${Math.round(averageScore)}, Grade: ${grade}`;
// }





// const numberOfStudents=parseInt(prompt(`Enter the number of students you want`))

// for(let i = 0; i < numberOfStudents; i++){
// const studentName=prompt(`Enter the student's name:`)
// const score1=parseInt(prompt(`Enter the first score:`))
// const score2=parseInt(prompt(`Enter the second score:`))
// const score3=parseInt(prompt(`Enter the third score:`))


// const fullReport=generateReport(studentName,score1,score2,score3)
// console.log(fullReport)
// }