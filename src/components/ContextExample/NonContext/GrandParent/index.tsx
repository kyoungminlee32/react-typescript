import { Parent } from '../Parent/index';

interface Props {
  value: string;
  age: number;
}

export const GrandParent = ({ value, age }: Props) => {
  return <Parent value={value} age={age} />;
};
