import React, { useState } from 'react';

function Conditional1() {
  const [userAge, setUserAge] = useState('');
  const [message, setMessage] = useState(null);

  const handleAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const checkAge = () => {
    const age = parseInt(userAge, 10);

    if (isNaN(age)) {
      setMessage(<p>Please enter a valid age.</p>);
    } else if (age >= 18) {
      setMessage(<p>You are an adult.</p>);
    } else {
      setMessage(<p>You are a minor.</p>);
    }
  };

  return (
    <div>
      <h1>Age Verification</h1>
      <label>
        Enter your age:
        <input type="text" value={userAge} onChange={handleAgeChange} />
      </label>
      <button onClick={checkAge}>Check Age</button>
      {message && <div>{message}</div>}
    </div>
  );
}

export default Conditional1;
