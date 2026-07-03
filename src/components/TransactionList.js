import React from "react";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="list">
      <h2>Transactions</h2>

      {transactions.length === 0 ? (
        <p>No transactions added.</p>
      ) : (
        transactions.map((item) => (
          <div
            key={item.id}
            className={`transaction ${
              item.type === "Income" ? "income-border" : "expense-border"
            }`}
          >
            <div>
              <h4>{item.title}</h4>
              <small>{item.type}</small>
            </div>

            <div className="right">
              <span>₹{item.amount}</span>
              <button onClick={() => deleteTransaction(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;
