import React, { useState } from 'react';

function HookThree() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled(prevState => !prevState);
  };

  return (
    <div>
      <p>{isToggled ? 'Button is ON' : 'Button is OFF'}</p>
      <button onClick={toggleButton}>Toggle</button>
    </div>
  );
}

export default HookThree;
