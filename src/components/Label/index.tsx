import styled from '@emotion/styled';

const Container = styled.label``;

interface Props {
  data: number;
}
export const Label = ({ data }: Props) => {
  return <Container>{data}</Container>;
};

export default Label;
