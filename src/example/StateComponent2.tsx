import React, { useState } from 'react';
import Button from '../components/Button';
import Label from '../components/Label';

export const StateComponent2 = () => {
  const [count, setCount] = useState(0);

  const sub = (): void => {
    setCount(count - 1);
  };

  const add = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={sub} label='-' />
      <Label data={count} />
      <Button onClick={add} label='+' />
    </div>
  );
};

export default StateComponent2;
