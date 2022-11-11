let income = document.querySelector('#income');
let balance = document.querySelector('#balance');
let expense = document.querySelector('#expense');
let transaction = document.querySelector('#transaction');
let description = document.querySelector('#description');
let incomeBtn = document.querySelector('#incomeBtn');
let expenseBtn = document.querySelector('#expenseBtn');
let amount = document.querySelector('#amount');
let currentIncome;
let currentExpense;
var listItem;

const emptyfield = () => {
    amount.value = '';
    description.value = '';
}
const backgroundOfTransactionHistory = (colorName) => {
    listItem.classList.add(colorName);
}
const headingOfTransactionHistory = (colorName) => {
    document.querySelector('.text-secondary').classList.add(colorName);
}
incomeBtn.addEventListener('click', () => {
    let currentAmount = parseInt(amount.value);
    currentIncome = parseInt(income.innerHTML);
    if (amount.value !== '' && description.value !== '') {
        balance.innerHTML = parseInt(balance.innerHTML) + currentAmount;
        currentIncome += currentAmount;
        income.innerHTML = currentIncome;
        getItemValue();
        emptyfield();
        headingOfTransactionHistory('text-light');
        backgroundOfTransactionHistory('bg-success');
    } else {
        alert('please enter valid details');
    }
});

expenseBtn.addEventListener('click', () => {
    let currentAmount = parseInt(amount.value);
    currentExpense = parseInt(expense.innerHTML);
    if (amount.value !== '' && description.value !== '') {
        balance.innerHTML = parseInt(balance.innerHTML) - currentAmount
        currentExpense += currentAmount;
        expense.innerHTML = currentExpense;
        getItemValue();
        emptyfield();
        headingOfTransactionHistory('text-light');
        backgroundOfTransactionHistory('bg-danger');
    } else {
        alert('please enter valid details');
    }
});

getItemValue = () => {
    addTransactionHistory(description.value, amount.value);
}

const addTransactionHistory = (item1, item2) => {
    listItem = document.createElement("li");
    listItem.innerHTML = `<div>${item1}</div>${item2}<i class="fas fa-times delete"></i>`;
    listItem.querySelector(".delete").addEventListener(
        "click",
        function () {
            listItem.remove();
        }
    )

    transaction.appendChild(listItem)
}
