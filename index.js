  marks = prompt('Provide the Student Marks:')

if (marks>=79 && marks<=100){  
  console.log('A')

} else if (marks >=60 && marks<79){  
  console.log('B')

} else if (marks >= 49 && marks<59) {   
  console.log('C')

} else if(marks >=40 && marks<49){   
  console.log('D') 

} else if (marks <40){    
   console.log('E')

}else if (marks >100 || isNaN(marks)){  
 console.log('Provide the right input')}