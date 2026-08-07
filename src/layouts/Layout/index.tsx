import styled from '@emotion/styled';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import Button from '../../components/Button/scrollToButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    flex: 1;
  }
`;
const Main = styled.main`
  flex: 1;
  min-height: calc(100vh - 17rem);
  padding: 2rem;
  font-size: 1.6rem;
  margin-top: 9rem;
  @media (max-width: 768px) {
    min-height: auto;
    padding: 2rem;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Container>
      {/* 헤더 */}
      <Header />
      <Content>
        {/* 사이드바 */}
        <Sidebar />
        <Main>{props.children}</Main>
        <Button label='탑버튼' />
      </Content>
      {/* 푸터 */}
      <Footer />
    </Container>
  );
};

export default Layout;
