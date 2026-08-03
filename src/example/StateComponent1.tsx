import React, { useState } from 'react';
import style from './style.module.css';

export const StateComponent1 = () => {
  const [message, setMessage] = useState('');

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <input onChange={inputChange} className={style.bgInput} />
      <p>{message}</p>
    </div>
  );
};

export default StateComponent1;
