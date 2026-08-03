import styled from '@emotion/styled';
import { Link } from 'react-router-dom'; // Link 추가!

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
const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;
const NavLink = styled(Link)`
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
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/example/StateComponent1'>StateComponent1</NavLink>
        <NavLink to='/example/StateComponent2'>StateComponent2</NavLink>
        <NavLink to='/example/Context/NoneContext'>NoneContext</NavLink>
        <NavLink to='/example/Context/Context'>Context</NavLink>
        <NavLink to='/example/Context/Context2'>Context2</NavLink>
        <NavLink to='/pages/Example1'>Example1</NavLink>
      </Nav>
    </Container>
  );
};

export default Header;
