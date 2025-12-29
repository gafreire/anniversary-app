import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const draw = keyframes`
  from {
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }
  to {
    stroke-dasharray: 500;
    stroke-dashoffset: 0;
  }
`;

export const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 13ch;
  }
`;

export const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const ContentWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`;

export const HeartContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
  }
`;

export const HeartSVG = styled.svg`
  width: 100%;
  height: 100%;
  
  path {
    fill: none;
    stroke: #fb7185;
    stroke-width: 2;
    animation: ${draw} 2s ease forwards;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fda4af 0%, #fb7185 50%, #e11d48 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

export const NamesContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const Names = styled.div`
  font-size: 1.5rem;
  color: #fda4af;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  border-right: 2px solid #fb7185;
  animation: 
    ${typing} 1.5s steps(13) 1s forwards,
    ${blink} 0.7s step-end infinite;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    border-right-width: 3px;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    border-right-width: 4px;
  }
`;

export const ScrollIndicator = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 24px;
    height: 24px;
    stroke: #fb7185;
    stroke-width: 2;
    fill: none;
  }

  @media (min-width: 768px) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;