import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../Header/menuData';

const SidebarContainer = styled.aside`
  /* 1. 시맨틱 태그 aside 권장 */
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: #f5f5f5;
  min-width: 12rem;
  box-sizing: border-box;
  border-right: 1px solid #e5e5e5;
  height: 100vh; /* 데스크톱에서는 세로를 꽉 채웁니다 */

  /* 📱 모바일 환경 (768px 이하) */
  @media (max-width: 768px) {
    min-width: 100%; /* 너비를 꽉 채움 */
    height: auto; /* 세로 길이를 고정하지 않고 늘어남 */
    border-right: none;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
  }
`;

const SidebarNav = styled.ul`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  gap: 0.8rem;
  list-style: none;
  padding: 0;
  margin: 0;

  /* 📱 모바일 환경에서는 가로로 배치하거나 한 눈에 들어오게 조절 */
  @media (max-width: 768px) {
    flex-direction: row; /* 메뉴를 가로로 배치 */
    flex-wrap: wrap; /* 화면 폭이 부족하면 줄바꿈 */
    gap: 1rem;
  }
`;

const SidebarItem = styled.li`
  /* 기존 margin 제거하고 gap으로 통일하여 레이아웃 안정화 */
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  display: block;
  padding: 0.3rem 0;

  &:hover {
    text-decoration: underline;
    color: #007bff; /* 마우스 올렸을 때 포인트 컬러 */
  }

  @media (max-width: 768px) {
    background-color: #fff; /* 모바일에서는 버튼처럼 보이게 구성 */
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarNav>
        {/* 2. ⭕ 문법 수정: 무의미하게 감싸던 상위 <SidebarItem>을 제거하고 map을 다이렉트로 실행합니다 */}
        {MENU_ITEMS?.map((item) => (
          <SidebarItem key={item.to}>
            <SidebarLink to={item.to}>{item.label}</SidebarLink>
          </SidebarItem>
        ))}
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
