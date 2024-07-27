import React, { useState } from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddClick = () => {
    const newTask = { date, description, amount };
    setTasks([...tasks, newTask]);
    setDate('');
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <div className="Ex-item">
        <div className="Ex-left">
          <input
            type="text"
            className="Ex-date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            className="Ex-description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input
          type="text"
          className="Ex-amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="Ex-add-btn" onClick={handleAddClick}>ADD</button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="Ex-item">
            <div className="Ex-left">
              <div className="Ex-date">{task.date}</div>
              <h2 className="Ex-description">{task.description}</h2>
            </div>
            <div className="Ex-amount">{task.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseItem;
