import React,{useEffect, useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = "http://localhost:8001/transactions"

function AccountContainer() {

  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      setTransactions(data)
    })
  }, [])

  const addNewTransaction = transaction => {
    fetch(API, {
      method:"post",
      headers: {"content-type":"application/json"},
      body: JSON.stringify(transaction)
    }).then(resp => resp.json())
    .then(newTransaction => setTransactions([...transactions, newTransaction]))
  }

  return (
    <div>
      <Search transactions={transactions} setTransactions={setTransactions}/>
      <AddTransactionForm addNewTransaction={addNewTransaction}/>
      <TransactionsList transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
}

export default AccountContainer;
