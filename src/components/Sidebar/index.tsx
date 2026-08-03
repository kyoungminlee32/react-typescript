import styled from '@emotion/styled';
import { Link } from 'react-router-dom'; // Link 추가!

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f5f5f5;
  min-width: 10rem;
`;
const Logo = styled.img`
  height: 40px;
`;
const Menu = styled.menu`
  list-style-type: none;
  padding: 0;
`;
const MenuItem = styled.li`
  margin: 0.5rem 0;
`;
const MenuLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
    color: #007bff;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink to='/'>Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/example/StateComponent1'>StateComponent1</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/example/StateComponent2'>StateComponent2</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/example/Context/NoneContext'>NoneContext</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/example/Context/Context'>Context</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/example/Context/Context2'>Context2</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/pages/Example1'>Example1</MenuLink>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Sidebar;
