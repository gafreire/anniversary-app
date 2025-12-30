import styled  from 'styled-components';
import { motion } from 'framer-motion';
export const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  color: #fda4af;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.3;
  padding: 0 1rem;

  .desktop-text {
    display: none;
  }

  .mobile-break {
    display: block;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;

    .desktop-text {
      display: block;
    }

    .mobile-break {
      display: none;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 900px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 1200px;
  }
`;

export const CardContainer = styled.div`
  perspective: 1000px;
  height: 160px;
  cursor: pointer;

  @media (min-width: 768px) {
    height: 180px;
  }

  @media (min-width: 1024px) {
    height: 200px;
  }
`;

export const CardInner = styled(motion.div)<{ isFlipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CardFront = styled(CardFace)<{ color: string }>`
  background: linear-gradient(135deg, ${props => props.color}15 0%, ${props => props.color}30 100%);
  border: 2px solid ${props => props.color}50;
`;

export const CardBack = styled(CardFace)`
  background: linear-gradient(135deg, rgba(251, 113, 133, 0.2) 0%, rgba(225, 29, 72, 0.2) 100%);
  border: 2px solid rgba(251, 113, 133, 0.5);
  transform: rotateY(180deg);
`;

export const CardNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fda4af 0%, #fb7185 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const CardLabel = styled.div`
  font-size: 0.8rem;
  color: #fce7f3;
  font-weight: 600;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ReasonText = styled.div`
  font-size: 0.85rem;
  color: #fce7f3;
  text-align: center;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const HeartIcon = styled.span`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: block;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const colors = [
  '#fb7185',
  '#f472b6',
  '#e879f9',
  '#c084fc',
  '#a78bfa',
  '#818cf8',
];