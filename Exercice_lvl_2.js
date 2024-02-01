//2. CREATE STUDENT OBJECT : FIRST NAME, LAST NAME, AGE, SKILLS, COUNTRY, ENROLLED KEYS AND VALUES FOR THE KEYS. STORE THE OBJECT IN LOCAL STORAGE


let student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    skills: ["JavaScript", "HTML", "CSS"],
    country: "United States",
    enrolled: true
};

console.log(student);

let studentStringify = JSON.stringify(student, undefined, 4);

localStorage.setItem('student', studentStringify);

console.log(studentStringify)
