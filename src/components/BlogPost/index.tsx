import styled from '@emotion/styled';

const Container = styled.div`
  border: 1px solid #eee;
  margin: 10px;
  padding: 10px;
`;
const Title = styled.h3``;
const Body = styled.p``;

interface Props {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const BlogPost = ({ title, body }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};

export default BlogPost;
