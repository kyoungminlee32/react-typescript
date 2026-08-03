import styled from '@emotion/styled';

const Container = styled.div``;

interface Props {
  value: string;
  age: number;
}

export const GrandChild = ({ value, age }: Props) => {
  return (
    <Container>
      {value} (Age: {age})
    </Container>
  );
};
