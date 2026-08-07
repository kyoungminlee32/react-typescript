import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
const Container = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 13rem;
  padding: 1rem;
  border-radius: 0;
  color: inherit;
  border: 1px solid #ccc;
  z-index: 1000;

  /* 💡 기본 상태 (숨겨진 상태): 아래로 2rem 내려가 있고 투명함 */
  opacity: 0;
  visibility: hidden;
  transform: translateY(2rem);

  /* 부드럽고 찰진 애니메이션 속도 및 가속도 설정 */
  transition:
    opacity 0.4s ease-out,
    transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
    visibility 0.4s;

  /* 💡 스크롤 감지로 .active 클래스가 붙었을 때 (숑 올라오는 효과) */
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0); /* 원래 위치(위로 2rem)로 복귀 */
  }

  /* 💡 마우스를 올렸을 때 살짝 더 떠오르는 추가 효과 (선택사항) */
  &:hover {
    transform: translateY(-4px);
    transition: transform 0.2s ease;
  }
`;

interface Props {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  const navigate = useNavigate();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handelShowButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handelShowButton);

    return () => {
      window.removeEventListener('scroll', handelShowButton);
    };
  }, []);
  // 최상단으로 부드럽게 이동시키는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // if (!showButton) return null;

  // 탑버튼 클릭했을때 실행되는 이벤트
  const handleClick = () => {
    // 1. 부모 컴포넌트에서 넘겨준 커스텀 onClick이 있다면 실행합니다.
    if (onClick) {
      onClick();
    } else {
      setTimeout(() => {
        scrollToTop();
        navigate('/');
      }, 150);
    }
  };

  return (
    <Container onClick={handleClick} className={showButton ? 'active' : ''}>
      {label}
    </Container>
  );
};

export default Button;
