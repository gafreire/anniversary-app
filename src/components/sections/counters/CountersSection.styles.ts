import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Card, CardTitle } from '../../UI/Card';

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

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 500px;

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 1100px;
    gap: 3rem;
  }
`;

export const CounterCard = styled(Card)`
  text-align: center;

  @media (min-width: 1024px) {
    flex: 1;
    padding: 2.5rem;
  }
`;

export const CounterValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #fb7185;
  margin-top: 1rem;
  line-height: 1.6;
  word-break: break-word;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const CounterLabel = styled(CardTitle)`
  color: #fce7f3;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const HeartIcon = styled.span`
  display: inline-block;
  animation: pulse 2s ease-in-out infinite;
  font-size: 2rem;
  margin-bottom: 0.5rem;

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;
