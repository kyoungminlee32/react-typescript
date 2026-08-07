import styled from '@emotion/styled';

const Container = styled.button``;

interface Props {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
