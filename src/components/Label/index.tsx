import styled from '@emotion/styled';

const Container = styled.label`
  padding: 0 1rem;
`;

interface Props {
  data: number;
}
export const Label = ({ data }: Props) => {
  return <Container>{data}</Container>;
};

export default Label;
