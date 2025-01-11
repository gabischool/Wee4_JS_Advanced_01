
/*Task 1: Library Late Fee Calculator 🚀🚀🚀🚀

You are working at a library and need to calculate late 
fees for overdue books. Write a function called `calculateLateFee` 
that takes the number of overdue days as input and calculates 
the fee ($0.25 per day). Prompt the user to input the
number of overdue days.

*///get the result as:

//"The late fee is $[amount]."

//Example:
//User Input: 10
//Output: "The late fee is $2.50."



//✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function calculateLateF(){
  let days = prompt("please enter your overdue days:");
  let fee = days * 0.25; 
  console.log("The late fee is $" + fee); 
}
calculateLateF();

// Extra Task:
// - Convert the function into a function expression.

const calculateLateFee = function(){
  let days = prompt("please enter your overdue days:");
  let fee = days * 0.25; 
  console.log("The late fee is $" + fee); 
}
calculateLateFee();



//Task 2 : Favorite Color Finder 🚀🚀🚀🚀

/*You are designing a game that asks players for their favorite color. 
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
let color = prompt("Please write down here your favorite color")

function findColorMeaning(color) {
 if (color=="blue"){console.log("You love calm and peace");} 

    else if(color=="Red"){console.log("You are passionate and bold.");}

      else if (color=="Gree") { console.log("you are connected to nature.");}

     else if (color== "Yellow"){ console.log("You radiate happiness and energy.");} 
 else{ console.log("That's a unique choice!");}                                                          
}

findColorMeaning(color)
  



 //Extra Task:
// - Rewrite the function using an arrow function.

const findColorMean=(color)=>{
  let colorName= prompt("Please write down here your favorite color")

 if (color=="blue"){console.log("You love calm and peace");} 

    else if(color=="Red"){console.log("You are passionate and bold.");}

      else if (color=="Gree") { console.log("you are connected to nature.");}

     else if (color== "Yellow"){ console.log("You radiate happiness and energy.");} 
 else{ console.log("That's a unique choice!");}                                                          
}
findColorMean("color");
                          
 

//Task 3 : Lawyer's Case Log 🚀🚀🚀🚀

/*You’re a lawyer, and you’ve been assigned to organize your case files. 
Write a function called `logCase` that takes the client's name and 
the case number as parameters. For each case, log:

"Case #[caseNumber]: [clientName]'s case is now logged."

Example:
Input: logCase("John Doe", 12345)
Output: "Case #12345: John Doe's case is now logged."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function logCase(name,caseNumber){

  console.log("Case # 12345: John Doe's case is now logged.");
}
logCase("John Doe"+12345)

 //Extra Task:
 //- Rewrite the function as an arrow function.

const logcase=(name,caseNumber) =>{

  console.log("Case #12345: John Doe's case is now logged.");
}
logcase("John Doe"+12345)

 

/*Task 4 : Attendance Tracker 🚀🚀🚀🚀

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

function markAttendance(studentName, isPresent ){

  if(isPresent) {

    console.log(studentName, "is present")

  } else { 

    console.log(studentName, "is absent")
 }

}

markAttendance("Amina", true);


// Extra Task:
// - Convert the function into a function expression.
const studentAttendance = function (studentName, isPresent ){

  if(isPresent) {

    console.log(studentName, "is present")

  } else { 

    console.log(studentName, "is absent")
 }

}

studentAttendance("Amina", true);






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
*/