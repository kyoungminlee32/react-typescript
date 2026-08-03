import { Child } from '../Child/index';

interface Props {
  value: string;
  age: number;
}

export const Parent = ({ value, age }: Props) => {
  return <Child value={value} age={age} />;
};
