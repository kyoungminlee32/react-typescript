import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from './menuData';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  min-height: 3rem;
  width: 100%;
  box-sizing: border-box; /* 패딩이 너비를 벗어나지 않도록 고정 */

  /* 📱 화면 가로가 768px 이하로 줄어들었을 때 실행 */
  @media (max-width: 768px) {
    flex-direction: column; /* 세로 정렬로 강제 변경 */
    gap: 1rem;
    align-items: flex-start; /* 모바일에서는 왼쪽으로 정렬 */
  }
`;

const Nav = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0; /* 브라우저 기본 기본 여백 초기화 필수! */
  margin: 0;

  /* ⭕ 핵심: 모바일에서 메뉴가 화면 우측을 삐져나가지 않도록 자동 줄바꿈 처리 */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.8rem;
    width: 100%; /* 모바일에서 너비 꽉 채우기 */
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #333;
  display: inline-block;
  padding: 0.2rem 0;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <Container>
      <Nav>
        {MENU_ITEMS?.map((item) => (
          <MenuItem key={item.to}>
            <MenuLink to={item.to}>{item.label}</MenuLink>
          </MenuItem>
        ))}
      </Nav>
    </Container>
  );
};

export default Header;
