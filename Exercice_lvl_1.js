//1. STORE : FIRST NAME, LAST NAME, AGE, COUNTRY, CITY IN LOCAL STORAGE

let user = {
    firstName: "Ozan",
    lastName: "Yuce",
    age: 28,
    country: "France",
    city: "Paris"
}

let userStringify = JSON.stringify(user, undefined, 4);
localStorage.setItem('user', userStringify)
console.log(userStringify)