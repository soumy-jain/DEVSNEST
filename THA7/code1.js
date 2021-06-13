var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// for(i in student)
// {
//     console.log(i+", ");
// }
var res=Object.keys(student)
console.log(res.join(", "))