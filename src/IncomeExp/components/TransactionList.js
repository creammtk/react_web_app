import React from "react";

export default function TransactionList({ txns }) {
  return <div>
    <h1>รายการทั้งหมด</h1>
    <ul>
        {txns.map((txn) => {
            return <li>รายการ: {txn.detail}, จำนวนเงิน: {txn.amount}</li>
        })}

    </ul>
  </div>;
}
