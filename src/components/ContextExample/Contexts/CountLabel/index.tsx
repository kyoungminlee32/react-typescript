import { useContext } from 'react';
import { CountContext } from '../index';

export const CountLabel = () => {
  const { count } = useContext(CountContext);
  //   const vaule = useContext(CountContext);
  return <div>count : {count}</div>;
};
