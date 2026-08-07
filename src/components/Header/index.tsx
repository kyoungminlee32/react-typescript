import { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { NavLink, useLocation } from 'react-router-dom'; // 💡 1. useLocation 임포트 확인
import { HEADER_MENU_ITEMS } from './menuData';

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  z-index: 1000;

  /* 📱 화면 가로가 768px 이하로 줄어들었을 때 실행 */
  @media (max-width: 768px) {
  }
`;
const Nav = styled.ul`
  list-style: none;
  padding: 0 1rem; /* 브라우저 기본 기본 여백 초기화 필수! */
  margin: 0;
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  // scroll-behavior: smooth;
  /* ✅ [추가] 아이폰(iOS)에서 스크롤을 부드럽고 가볍게 만들어주는 관성 스크롤 속성 */
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
  }
`;

const MenuItem = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  height: 90px;
  box-sizing: border-box;
`;

const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  display: inline-block;
  padding: 0.2rem 0;
  font-size: 1.6rem;

  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #0000ff;
  }
`;

const Header = () => {
  // 1. ul 태그를 직접 제어하기 위한 ref 생성
  const scrollContainerRef = useRef<HTMLUListElement>(null);

  // 💡 2. 현재 브라우저의 URL 주소창 변화를 실시간으로 감시하는 Hook
  const location = useLocation();

  // 💡 3. 탑버튼 클릭 등 외부 요인으로 주소(location)가 바뀔 때 실행되는 로직
  useEffect(() => {
    // 페이지 진입 및 active 클래스가 DOM에 완전히 입혀질 때까지 시간을 0.15초 확보합니다.
    const timer = setTimeout(() => {
      if (!scrollContainerRef.current) return;

      // 현재 활성화된 '.active' 클래스를 가진 요소를 찾습니다.
      const activeLink = scrollContainerRef.current.querySelector(
        '.active'
      ) as HTMLAnchorElement;

      if (activeLink) {
        const parentLi = activeLink.parentElement;

        if (parentLi) {
          // 정밀한 가로 offset 위치 계산
          const targetLeft =
            parentLi.offsetLeft - scrollContainerRef.current.offsetLeft;

          // 헤더 메뉴바의 가로 스크롤을 'Home' 혹은 해당 메뉴 위치로 부드럽게 밀어줍니다.
          scrollContainerRef.current.scrollTo({
            left: targetLeft,
            behavior: 'smooth',
          });
        }
      }
    }, 150); // 💡 타임아웃을 150ms로 살짝 늘려 안정성을 확보합니다.

    return () => clearTimeout(timer);
  }, [location]); // 💡 주소창이 바뀔 때마다 이 스크롤 로직이 매번 강제로 발동합니다!

  // 2. 메뉴 클릭 시 실행될 이동 핸들러 함수
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 이벤트가 발생한 대상(클릭된 a 태그)을 가져옵니다.
    const target = e.currentTarget;

    // a 태그를 감싸고 있는 부모 li 태그를 가져옵니다. (li의 offsetLeft를 기준으로 계산하기 위함)
    const parentLi = target.parentElement;

    if (scrollContainerRef.current && parentLi) {
      const targetLeft =
        parentLi.offsetLeft - scrollContainerRef.current.offsetLeft;
      scrollContainerRef.current.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Container>
      <Nav ref={scrollContainerRef}>
        {HEADER_MENU_ITEMS?.map((item) => (
          <MenuItem key={item.to}>
            <MenuLink to={item.to} onClick={handleMenuClick}>
              {item.label}
            </MenuLink>
          </MenuItem>
        ))}
      </Nav>
    </Container>
  );
};

export default Header;
