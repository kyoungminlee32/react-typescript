import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MENU_ITEMS } from './menuData';

const Container = styled.header`
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box; /* 패딩이 너비를 벗어나지 않도록 고정 */

  /* 📱 화면 가로가 768px 이하로 줄어들었을 때 실행 */
  @media (max-width: 768px) {
  }
`;
const Nav = styled.ul`
  list-style: none;
  padding: 0; /* 브라우저 기본 기본 여백 초기화 필수! */
  margin: 0;

  /* ⭕ 핵심: 모바일에서 메뉴가 화면 우측을 삐져나가지 않도록 자동 줄바꿈 처리 */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

const MenuItem = styled.li`
  padding: 1rem;
  display: inline-block;
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  display: inline-block;
  padding: 0.2rem 0;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #0000ff;
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
