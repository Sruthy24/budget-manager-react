import React from "react";

function Summary({ income, expense, balance }) {
  return (
    <div className="summary">
      <div className="card income">
        <h3>Income</h3>
        <h2>₹{income}</h2>
      </div>

      <div className="card expense">
        <h3>Expense</h3>
        <h2>₹{expense}</h2>
      </div>

      <div className="card balance">
        <h3>Balance</h3>
        <h2>₹{balance}</h2>
      </div>
    </div>
  );
}
export default Summary;
