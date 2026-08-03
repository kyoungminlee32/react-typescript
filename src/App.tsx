import React from 'react';
import logo from './logo.svg';
// import './App.css';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'; // keyframes 임포트 필요
import { Routes, Route } from 'react-router-dom'; // Routes, Route 임포트 문장 추가!
// import Hello from './Hello';
// import StateComponent1 from './example/StateComponent1'; // 보여줄 컴포넌트 임포트
// import StateComponent2 from './example/StateComponent2'; // 보여줄 컴포넌트 임포트
// import NoneContext from './example/Context/NoneContext'; // 보여줄 컴포넌트 임포트
// import ContextExample from './example/Context/Context'; // 보여줄 컴포넌트 임포트
// import Context2 from './example/Context/Context2'; // 보여줄 컴포넌트 임포트
// import Example1 from './pages/Example1'; // 보여줄 컴포넌트 임포트
import Layout from './layouts/Layout'; // 보여줄 컴포넌트 임포트
import { MENU_ITEMS } from './components/Header/menuData';

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
const NotFound = styled.div`
  text-align: center;
`;

function App() {
  return (
    // <div className='App'>
    <AppContainer>
      <Layout>
        {/* 주소에 따라 유동적으로 컴포넌트가 바뀌는 영역 */}
        <Routes>
          {/* <Route path='/' element={<Hello name='flature' color='blue' />} />
          <Route
            path='/example/StateComponent1'
            element={<StateComponent1 />}
          />
          <Route
            path='/example/StateComponent2'
            element={<StateComponent2 />}
          />
          <Route
            path='/example/Context/NoneContext'
            element={<NoneContext />}
          />
          <Route path='/example/Context/Context' element={<ContextExample />} />
          <Route path='/example/Context/Context2' element={<Context2 />} />
          <Route path='/pages/Example1' element={<Example1 />} /> */}
          {MENU_ITEMS.map((item) => (
            <Route key={item.to} path={item.to} element={item.element} />
          ))}
          <Route
            path='*'
            element={
              <NotFound>
                <h2>404</h2>
                <p>요청하신 페이지를 찾을 수 없습니다.</p>
              </NotFound>
            }
          />
        </Routes>
        {/* 
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
        <Hello name={'tomy'} color={'red'} />
        <Hello name='army' color='#ff0' />
        <Hello />
      </AppHeader> */}
      </Layout>
    </AppContainer>
    // </div>
  );
}

export default App;
