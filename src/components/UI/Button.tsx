// src/components/ui/Button.tsx

import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const Button = styled(motion.button)<ButtonProps>`
  background: ${props => 
    props.variant === 'secondary' 
      ? 'rgba(251, 113, 133, 0.2)' 
      : 'linear-gradient(135deg, #fb7185 0%, #e11d48 100%)'
  };
  color: white;
  border: ${props => props.variant === 'secondary' ? '2px solid #fb7185' : 'none'};
  border-radius: 9999px;
  padding: ${props => {
    switch(props.size) {
      case 'small': return '0.5rem 1.5rem';
      case 'large': return '1rem 2.5rem';
      default: return '0.75rem 2rem';
    }
  }};
  font-size: ${props => {
    switch(props.size) {
      case 'small': return '0.875rem';
      case 'large': return '1.125rem';
      default: return '1rem';
    }
  }};
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(251, 113, 133, 0.3);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(251, 113, 133, 0.5);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: ${props => {
      switch(props.size) {
        case 'small': return '0.4rem 1.2rem';
        case 'large': return '0.9rem 2rem';
        default: return '0.65rem 1.75rem';
      }
    }};
  }
`;