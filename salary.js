let basicSalary = Number(prompt("Enter the employee's basic salary:"));
let benefits = Number(prompt("Enter the employee's benefits:"));
let grossSalary = basicSalary + benefits;

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
  
  let nssf = 0.06 * basicSalary;
  
  let netSalary = grossSalary - payeeTax - nhif - nssf;
  
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`Payee Tax: ${payeeTax}`);
  console.log(`NHIF: ${nhif}`);
  console.log(`NSSF: ${nssf}`);
  console.log(`Net Salary: ${netSalary}`);