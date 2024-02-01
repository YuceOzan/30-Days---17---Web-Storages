//1. CREATE OBJECT CALLED "PERSON ACCOUNT" WHICH CONTAINS : FIRST NAME, LAST NAME, INCOMES, EXPENSE PROPERTIES AND HAS TOTAL INCOME, TOTAL EXPENSE,
//   ACCOUNT INFO, ADD INCOME, ADD EXPENSE AND ACCOUNT BALANCE METHODS. INCOMES IS A SET AND ITS DESCRIPTION AND EXPENSES IS ALSO A SET OF EXENPSES
//   AND ITS DESCRIPTION.


let personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [],
    expenses: [],
  
    totalIncome: function () {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    totalExpense: function () {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    accountInfo: function () {
        return `${this.firstName} ${this.lastName}'s account\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}`;
    },
    addIncome: function (description, amount) {
        this.incomes.push({ description, amount });
    },
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount });
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    }
};

personAccount.addIncome("Salary", 3000);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Groceries", 200);
personAccount.addIncome("Freelance", 500);

console.log(personAccount.accountInfo());
console.log("Current Account Balance: " + personAccount.accountBalance());
