import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  variant?: 'default' | 'gradient' | 'outlined';
  hoverable?: boolean;
}

export const Card = styled(motion.div)<CardProps>`
  background: ${props => {
    switch(props.variant) {
      case 'gradient':
        return 'linear-gradient(135deg, rgba(251, 113, 133, 0.1) 0%, rgba(225, 29, 72, 0.1) 100%)';
      case 'outlined':
        return 'transparent';
      default:
        return 'rgba(255, 255, 255, 0.05)';
    }
  }};
  backdrop-filter: blur(10px);
  border: ${props => 
    props.variant === 'outlined' 
      ? '2px solid rgba(251, 113, 133, 0.3)' 
      : '1px solid rgba(255, 255, 255, 0.1)'
  };
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  
  ${props => props.hoverable && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 12px 40px rgba(251, 113, 133, 0.4);
      border-color: rgba(251, 113, 133, 0.6);
    }
  `}

  @media (max-width: 768px) {
    padding: 1.25rem;
    border-radius: 0.875rem;
  }
`;

export const CardTitle = styled.h3`
  color: #fda4af;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CardContent = styled.div`
  color: #e5e7eb;
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;