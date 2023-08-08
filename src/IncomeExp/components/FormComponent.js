import { useState } from "react";

const FormComponent = ({ setTxns, txns }) => {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setTxns([...txns,{detail: transaction, amount: amount}])
  };

  return (
    <div>
      <form className="TodoWrapper" onSubmit={handleSubmit}>
        <div>
          <h3>Transaction</h3>
          <input
            type="text"
            className="todo-input"
            placeholder="รายการ"
            value={transaction}
            required
            onChange={(e) => {
              setTransaction(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            className="todo-input"
            placeholder="จำนวนเงิน"
            value={amount}
            required
            onChange={(e) => {
              const isNumber = String(e.target.value).match(/^\d+$/);
              if (isNumber === null) {
                return;
              }
              setAmount(e.target.value);
            }}
          />
        </div>
        <div>
          <input type="submit" className="todo-btn" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
