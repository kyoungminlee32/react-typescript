import React, { useState } from 'react';

export const StateComponent1 = () => {
  const [message, setMessage] = useState('');

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <input onChange={inputChange} />
      <p>{message}</p>
    </div>
  );
};

export default StateComponent1;
