import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a0a14 50%, #0a0a0a 100%);
    color: #ffffff;
    overflow-x: hidden;
  }

  /* Scrollbar customizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1a0a14;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #fb7185 0%, #e11d48 100%);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #fda4af 0%, #fb7185 100%);
  }

  /* Animações globais */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Utilitários */
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slideInLeft {
    animation: slideInLeft 0.8s ease-out;
  }

  .animate-slideInRight {
    animation: slideInRight 0.8s ease-out;
  }

  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;