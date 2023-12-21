import React from 'react';

function Onclick() {
  const handleClick = () => {
    alert("Button Clicked :)")
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Onclick;
