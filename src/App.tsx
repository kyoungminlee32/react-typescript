import React from 'react';
import logo from './logo.svg';
// import './App.css';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'; // keyframes 임포트 필요

// 1. 애니메이션 키프레임 정의
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppContainer = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    /* 클래스명 대신 자기 자신에게 애니메이션을 직접 부여합니다 */
    animation: ${spin} infinite 20s linear;
  }
`;

const AppLink = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    // <div className='App'>
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt={'logo'} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppContainer>
    // </div>
  );
}

export default App;
