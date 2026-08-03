import { GrandChild } from '../GrandChild/index';

interface Props {
  value: string;
  age: number;
}

export const Child = ({ value, age }: Props) => {
  return <GrandChild value={value} age={age} />;
};
