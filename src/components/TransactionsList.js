import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, setTransactions}) {

  const handleSort = sortBy => {
    const sortedTransactions = transactions.sort((a,b) => {
      if (a[sortBy] < b[sortBy]) return -1
      else return 1
    })
    setTransactions([...sortedTransactions])
  }

  const transactionElements = transactions.map(transaction => {
    if (transaction.show) return
    return <Transaction key={transaction.id} transaction={transaction}/>
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Date
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => handleSort("description")}>sort</button>
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
            <button onClick={() => handleSort("category")}>sort</button>
              Category
              </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => handleSort("amount")}>sort</button>
              Amount
              </h3>
          </th>
        </tr>
        {transactionElements}
      </tbody>
    </table>
  );
}

export default TransactionsList;
