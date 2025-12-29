import styled, { keyframes } from 'styled-components';

export const floatUp = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
`;

export const FloatingContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`;

export const Heart = styled.div<{ left: number; delay: number; duration: number }>`
  position: absolute;
  left: ${props => props.left}%;
  bottom: -50px;
  width: 20px;
  height: 20px;
  opacity: 0;
  animation: ${floatUp} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 16px;
    background: #fb7185;
    border-radius: 10px 10px 0 0;
    top: 0;
  }

  &::before {
    left: 10px;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;