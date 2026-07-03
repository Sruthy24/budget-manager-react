import React, { useState } from "react";

function BudgetForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    addTransaction({
      id: Date.now(),
      title,
      amount,
      type,
    });

    setTitle("");
    setAmount("");
    setType("Income");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Transaction Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Income</option>
        <option>Expense</option>
      </select>

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default BudgetForm;
