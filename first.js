const students = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 22 },
    { name: "Zain", age: 21 }
  ];
  
  const names = students.map(student => student.name);
  
  console.log(names); // ["Ali", "Sara", "Zain"]
  