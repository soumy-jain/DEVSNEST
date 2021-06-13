var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
var res=Object.keys(student);
console.log(res.join(", "));
delete student.rollno;
var res=Object.keys(student);
console.log(res.join(", "));