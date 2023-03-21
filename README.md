# Code-challenge
Challenge 1:Student Grade Generator
 //the code begins by asking for user input on marks
  marks = prompt('Provide the Student Marks:')

  //the marks check if it is between 79 -100 to print 'A'
if (marks>=79 && marks<=100){  
  console.log('A')

  //the marks check if it is between 69 -79 to print 'B'
} else if (marks >=60 && marks<79){  
  console.log('B')

  //the marks check if it is between 49 -59 to print 'C'
} else if (marks >= 49 && marks<59) {   
  console.log('C')

  //the marks check if it is between 40 -49 to print 'D'
} else if(marks >=40 && marks<49){   
  console.log('D') 

  //the marks check if it less than 40 to print 'E'
} else if (marks <40){    
   console.log('E')

//the marks check if it is above 100 or a none value to print 'Provide the right input'
}else if (marks >100 || isNaN(marks)){  
 console.log('Provide the right input')}
 
 Challenge 2: Speed Detector
 // the aim is to tell if the driver has violates the speed limits
let speed = Number(prompt('Enter the speed of the car'))
let penaltyPoints = 0

//the if statement checks to see if the limit is below 70 and prints OK if fulfilled.
 if (speed < 70){
     console.log('Ok')
}

//else if the speed is above 70 the penalty points are calculated with the math.floor to and divided by 5 to provide the penalty points.
  else {
    penaltyPoints = Math.floor((speed-70)/5)
    console.log(`Points on speed violation: ${penaltyPoints}`)
}

// the if statement prints sorry mate for those who have above 12 points and will have to re-apply to get their liscence back

  if (penaltyPoints>12){
   console.log('Sorry mate, license suspended')
}
  
Challenge 3: Net Salary Calculator
let basicSalary = Number(prompt("Enter the employee's basic salary:"));
let benefits = Number(prompt("Enter the employee's benefits:"));
let grossSalary = basicSalary + benefits;

  // Calculate Payee Tax
let payeeTax = 0;
  if (grossSalary <= 24000) {
    payeeTax = 0.1 * grossSalary;
  } else if (grossSalary <= 32333) {
    payeeTax = 2400 + 0.25 * (grossSalary - 24000);
  } else if (grossSalary <= 42000) {
    payeeTax = 5600 + 0.3 * (grossSalary - 32333);
  } else if (grossSalary <= 51667) {
  payeeTax = 8960 + 0.32 * (grossSalary - 42000);
  } else if (grossSalary <= 61333) {
  payeeTax = 13888 + 0.34 * (grossSalary - 51667);
} else if (grossSalary <= 71000) {
  payeeTax = 19208 + 0.36 * (grossSalary - 61333);
} else {
  payeeTax = 25428 + 0.37 * (grossSalary - 71000);
}


  // Calculate NHIF Deduction
  let nhif = 0;
  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }
  
  // Calculate NSSF Deduction
  let nssf = 0.06 * basicSalary;
  
  // Calculate Net Salary
  let netSalary = grossSalary - payeeTax - nhif - nssf;
  
  // Log the results to the console
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`Payee Tax: ${payeeTax}`);
  console.log(`NHIF: ${nhif}`);
  console.log(`NSSF: ${nssf}`);
  console.log(`Net Salary: ${netSalary}`);
