import { createContext, useState } from 'react';

interface CountContextType {
  count: number;
  plusCount: () => void;
}

const CountContext = createContext<CountContextType>({
  count: 0,
  plusCount: () => {},
});

interface Props {
  children: React.ReactNode;
}

const CountProvider = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  const PlusCount = () => {
    setCount(count + 1);
  };

  return (
    <CountContext.Provider
      value={{
        count: count,
        plusCount: PlusCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
