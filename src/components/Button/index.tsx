import styled from '@emotion/styled';

const Container = styled.button`
  padding: 1rem;
  border-radius: 0;
`;

interface Props {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
