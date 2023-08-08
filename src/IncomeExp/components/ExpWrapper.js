import React, { useState } from "react";
import FormComponent from "./FormComponent";
import TransactionList from "./TransactionList";

export default function ExpWrapper() {
  const [txns, setTxns] = useState([])
  return (
    <div>
      <FormComponent setTxns={setTxns} txns={txns}/>
      <TransactionList txns={txns} />
    </div>
  );
}
