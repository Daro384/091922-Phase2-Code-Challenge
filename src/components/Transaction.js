import React from "react";

function Transaction({transaction, handleDelete}) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td><button onClick={() => handleDelete(transaction.id)} >Delete</button></td>
    </tr>
  );
}

export default Transaction;
