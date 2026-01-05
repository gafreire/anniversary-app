
import styled from 'styled-components';
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

export const LetterContainer = styled(motion.div)`
  max-width: 700px;
  width: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(251, 113, 133, 0.3);
  border-radius: 1.5rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    padding: 4rem 3.5rem;
  }
`;

export const EnvelopeIcon = styled.div`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 2rem;
  }
`;

export const LetterTitle = styled.h2`
  color: #fda4af;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.75rem;
  }
`;

export const LetterContent = styled.div`
  color: #e5e7eb;
  font-size: 1rem;
  line-height: 1.7;
  text-align: left;

  p {
    margin-bottom: 1.25rem;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.15rem;
    line-height: 1.9;

    p {
      margin-bottom: 1.75rem;

      &:last-of-type {
        margin-bottom: 2.5rem;
      }
    }
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 2;

    p {
      margin-bottom: 2rem;

      &:last-of-type {
        margin-bottom: 3rem;
      }
    }
  }
`;

export const Signature = styled.div`
  color: #fda4af;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: right;
  font-style: italic;
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 1.35rem;
    margin-top: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Hearts = styled.div`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 1.5rem;
  opacity: 0.3;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    top: -20px;
    right: -20px;
  }
`;
