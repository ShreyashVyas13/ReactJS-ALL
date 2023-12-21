import React, { useState } from 'react';

function Conditional2() {
  const [age, setAge] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const isEligibleToVote = age >= 18;
  const message = isEligibleToVote ? 'You are eligible to vote.' : 'You are not eligible to vote.';

  return (
    <div>
      <h1>Voting Eligibility Checker</h1>
      <label>
        Enter your age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <p>{message}</p>
    </div>
  );
}

export default Conditional2;
