import React, { useState } from 'react';

const BudgetPlanner = () => {
  const [accommodationCost, setAccommodationCost] = useState(0);
  const [activityCost, setActivityCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleCalculate = () => {
    setTotalCost(accommodationCost + activityCost);
  };
 
  return (
    <div className="budget-planner">
      <h2>Budget Planner</h2>
      <div>
        <label htmlFor="accommodation">Accommodation Cost ($):</label>
        <input
          type="number"
          id="accommodation"
          value={accommodationCost}
          onChange={(e) => setAccommodationCost(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="activities">Activities Cost ($):</label>
        <input
          type="number"
          id="activities"
          value={activityCost}
          onChange={(e) => setActivityCost(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={handleCalculate}>Calculate Total Cost</button>
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
    </div>
  );
};

export default BudgetPlanner;
