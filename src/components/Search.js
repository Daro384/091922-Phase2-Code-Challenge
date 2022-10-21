import React,{useState} from "react";

function Search({transactions, setTransactions}) {


  const [search, setSearch] = useState("")

  const handleSearch = event => {
    setSearch(event.target.value)
    if (event.target.value) {
      setTransactions(transactions.map(transaction => {
        if (transaction.description.includes(event.target.value)) return {...transaction, show:false}
        else return {...transaction, show:true}
      }))
    } else {
      setTransactions(transactions.map(transaction => ({...transaction, show:false})))
    }

  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
