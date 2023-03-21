while (true) {
    var mark = prompt("Enter student mark (0-100): ");
    if (mark === null) {
      // user clicked cancel or closed the dialog
      break;
    }
    mark = parseInt(mark);
    if (isNaN(mark) || mark < 0 || mark > 100) {
      alert("Invalid input. Mark should be between 0 and 100.");
    } else {
      var grade;
      if (mark > 79) {
        grade = "A";
      } else if (mark >= 60 && mark <= 79) {
        grade = "B";
      } else if (mark >= 50 && mark <= 59) {
        grade = "C";
      } else if (mark >= 40 && mark <= 49) {
        grade = "D";
      } else {
        grade = "E";
      }
      alert("Grade: E" + grade);
      break;
    }
  }
  