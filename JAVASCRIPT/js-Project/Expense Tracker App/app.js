let selectedType = "income";
const transactions = [];

const nameInput = document.getElementById("nameInput");
const amountInput = document.getElementById("amountInput");
const dateInput = document.getElementById("dateInput");
const addBtn = document.getElementById("addBtn");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const deleteBtn = document.getElementById("deleteBtn");
const exportBtn = document.getElementById("exportBtn");

const balanceText = document.getElementById("balance");
const summaryText = document.getElementById("summary");
const transactionsContainer = document.getElementById("transactionList");
const emptyMessage = document.getElementById("span");

function selectType(type) {
  selectedType = type;
  incomeBtn.classList.toggle("active", type === "income");
  expenseBtn.classList.toggle("active", type === "expense");
}

function formatMoney(amount) {
  return "$" + Number(amount).toLocaleString();
}

function updateSummary() {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);
  const balance = income - expense;

  balanceText.textContent = formatMoney(balance);
  summaryText.textContent = `Income: +${formatMoney(
    income
  )} | Expense: -${formatMoney(expense)}`;
}

function renderTransactions() {
  transactionsContainer
    .querySelectorAll(".transaction")
    .forEach((t) => t.remove());

  if (transactions.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
    transactions.forEach((t) => {
      const div = document.createElement("div");
      div.className = `transaction ${t.type}`;
      div.innerHTML = `
            <div style="display: flex; flex-direction: column">
              <strong>${t.name}</strong>
              <small>${t.date}</small>
            </div>
            <span>${t.type === "income" ? "+" : "-"} ${formatMoney(
        t.amount
      )}</span>
          `;
      transactionsContainer.appendChild(div);
    });
  }
  updateSummary();
}

addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const date = dateInput.value;

  if (!name || isNaN(amount) || amount <= 0 || !date) {
    alert("Please enter valid inputs.");
    return;
  }

  transactions.push({ name, amount, type: selectedType, date });
  nameInput.value = "";
  amountInput.value = "";
  dateInput.value = "";
  renderTransactions();
});

deleteBtn.addEventListener("click", () => {
  if (transactions.length === 0) {
    alert("No transactions here to delete!");
  } else {
    if (confirm("Are you sure you want to delete all transactions?")) {
      transactions.length = 0;
      renderTransactions();
    }
  }
});

exportBtn.addEventListener("click", () => {
  if (transactions.length === 0) {
    alert("No data to export.");
    return;
  }

  const data = transactions.map((t) => ({
    Name: t.name,
    Amount: t.amount,
    Type: t.type,
    Date: t.date,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
  XLSX.writeFile(workbook, "transactions.xlsx");
});

renderTransactions();
