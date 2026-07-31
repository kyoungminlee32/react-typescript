import styled from '@emotion/styled';

interface Props {
  name: string;
  color: string;
}

interface ContainerProps {
  color: string;
}

const Container = styled.div<ContainerProps>`
  color: ${(props: any) => props.color};
`;

function Hello({ name, color }: Props) {
  return <Container color={color}>Hello, {name}</Container>;
}

export default Hello;
