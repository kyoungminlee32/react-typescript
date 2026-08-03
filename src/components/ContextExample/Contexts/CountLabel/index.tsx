import { useContext } from 'react';
import { CountContext } from '../index';
import styled from '@emotion/styled';

const Label = styled.label`
  padding: 0 1rem;
`;

export const CountLabel = () => {
  const { count } = useContext(CountContext);
  //   const vaule = useContext(CountContext);
  return <Label>count : {count}</Label>;
};
