import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1a1a2e;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  opacity: ${({ $isLoading }) => ($isLoading ? '1' : '0')};
  visibility: ${({ $isLoading }) => ($isLoading ? 'visible' : 'hidden')};
`;

const Spinner = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
`;

const Circle = styled.div`
  position: absolute;
  border: 3px solid transparent;
  border-top-color: #ff4d4d;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
  
  &.circle-1 {
    width: 60px;
    height: 60px;
  }
  
  &.circle-2 {
    width: 45px;
    height: 45px;
    top: 7.5px;
    left: 7.5px;
    border-top-color: #fff;
    animation-duration: 0.8s;
  }
  
  &.circle-3 {
    width: 30px;
    height: 30px;
    top: 15px;
    left: 15px;
    border-top-color: #ff4d4d;
    animation-duration: 0.6s;
  }
`;

const Preloader = ({ isLoading }) => {
  return (
    <PreloaderContainer $isLoading={isLoading}>
      <Spinner>
        <Circle className="circle-1" />
        <Circle className="circle-2" />
        <Circle className="circle-3" />
      </Spinner>
    </PreloaderContainer>
  );
};

export default Preloader;