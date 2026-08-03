import styled from '@emotion/styled';
import { Link } from 'react-router-dom'; // Link 추가!
import { MENU_ITEMS } from '../Header/menuData';

const SidebarContainer = styled.div`
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
const SidebarNav = styled.ul`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  gap: 0.8rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const SidebarItem = styled.li`
  margin: 0.5rem 0;
`;
const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
    color: #333;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarNav>
        <SidebarItem>
          {MENU_ITEMS?.map((item) => (
            <SidebarItem key={item.to}>
              <SidebarLink to={item.to}>{item.label}</SidebarLink>
            </SidebarItem>
          ))}
        </SidebarItem>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
