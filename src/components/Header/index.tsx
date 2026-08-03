import styled from '@emotion/styled';
import { Link } from 'react-router-dom'; // Link 추가!
import { MENU_ITEMS } from './menuData';

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  min-height: 3rem;
`;
const Logo = styled.img`
  height: 40px;
`;
const Nav = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;
const MenuItem = styled.li``;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: #333;
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
