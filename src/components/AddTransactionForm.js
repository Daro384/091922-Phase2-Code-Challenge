import React, { useState } from "react";

function AddTransactionForm({addNewTransaction}) {

  const [formData, setFormData] = useState({date:"", description:"", category:"", amount:""})

  const handleForm = event => {
    setFormData({...formData, [event.target.name]:event.target.value})
  }

  const handleAddNewTransaction = event => {
    event.preventDefault()
    addNewTransaction(formData)

  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleAddNewTransaction}>
        <div className="inline fields">
          <input type="date"   name="date"                                              onChange={handleForm}/>
          <input type="text"   name="description" placeholder="Description"             onChange={handleForm}/>
          <input type="text"   name="category"    placeholder="Category"                onChange={handleForm}/>
          <input type="number" name="amount"      placeholder="Amount"      step="0.01" onChange={handleForm}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
