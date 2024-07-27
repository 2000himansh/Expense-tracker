import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseItem />
    </div>
  );
}

export default App;
