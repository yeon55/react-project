import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitled] = useState('');
//   const [enteredAmount, setEnteredAmount] = useState('');
//   const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
  });

  const titleChangeHandler = (e) => {
    // 첫번째 방법  
    // setEnteredTitled(e.target.value); 

    // 두번째 방법
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value,
    // });

    // 세번째 방법
    setUserInput((prevState) => {
        return {...prevState, enteredTitle: e.target.value};
    });
  };

  const amountChangeHandler = (e) => {
    // setEnteredAmount(e.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: e.amount.value,
    // });

    setUserInput((prevState) => {
        return {...prevState, enteredAmount: e.target.value};
    });
  };

  const dateChangeHandler = (e) =>{
    // setEnteredDate(e.value.target);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: e.date.value,
    // });

    setUserInput((prevState) => {
        return {...prevState, enteredDate: e.target.value};
    });
  };


  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2025-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
