import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  padding-bottom: 4rem;

  @media (min-width: 1024px) {
    max-width: 1200px;
  }
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, 
    transparent 0%, 
    #fb7185 10%, 
    #fb7185 90%, 
    transparent 100%
  );

  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const TimelineItem = styled(motion.div)<{ isLeft: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
  flex-direction: row;
  text-align: left;

  @media (min-width: 768px) {
    ${props => props.isLeft ? `
      flex-direction: row;
      text-align: right;
    ` : `
      flex-direction: row-reverse;
      text-align: left;
    `}
  }

  @media (min-width: 1024px) {
    margin-bottom: 5rem;
  }
`;

export const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #fb7185 0%, #e11d48 100%);
  border: 4px solid #0a0a0a;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 0 4px rgba(251, 113, 133, 0.2);

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    left: 50%;
  }
`;

export const TimelineContent = styled.div<{ isLeft: boolean }>`
  width: calc(100% - 60px);
  margin-left: 60px;

  @media (min-width: 768px) {
    width: calc(50% - 50px);
    margin-left: 0;
    margin-right: 0;
    ${props => props.isLeft ? 'margin-right: 50px;' : 'margin-left: 50px;'}
  }
`;

export const DateLabel = styled.div`
  color: #fda4af;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

export const PhotoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(251, 113, 133, 0.3);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    border-color: rgba(251, 113, 133, 0.6);
    box-shadow: 0 12px 40px rgba(251, 113, 133, 0.4);
  }

  @media (min-width: 1024px) {
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
  background: rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    max-height: 500px;
  }

  @media (min-width: 1024px) {
    max-height: 600px;
  }
`;

export const Description = styled.div`
  padding: 0.875rem;
  color: #e5e7eb;
  font-size: 0.9rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    padding: 1.25rem;
    font-size: 1.05rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

export const FinalMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem 1.5rem;
  margin-top: 2rem;
  background: linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, rgba(225, 29, 72, 0.1) 100%);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(251, 113, 133, 0.3);
  border-radius: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    color: #fda4af;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  p {
    color: #e5e7eb;
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    padding: 3rem 2.5rem;
    max-width: 750px;

    h3 {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.15rem;
      line-height: 1.8;
    }
  }

  @media (min-width: 1024px) {
    max-width: 900px;
    padding: 4rem 3rem;

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;