document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!description || isNaN(amount)) {
        return;
    }

    addExpense(description, amount);
    updateTotal();
    this.reset();
});

let expenses = [];

function addExpense(description, amount) {
    expenses.push({ description, amount });

    const expenseList = document.getElementById('expense-list');
    const li = document.createElement('li');
    li.innerHTML = `${description}: $${amount.toFixed(2)} <button onclick="removeExpense(this)">Remove</button>`;
    expenseList.appendChild(li);
}

function removeExpense(button) {
    const li = button.parentElement;
    const index = Array.from(li.parentElement.children).indexOf(li);
    expenses.splice(index, 1);
    li.remove();
    updateTotal();
}

function updateTotal() {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}