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
