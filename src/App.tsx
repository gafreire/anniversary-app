// src/App.tsx
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { IntroSection } from './components/sections/IntroSection';
import { FloatingHearts } from './components/layout/FloatingHearts';

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const ContentContainer = styled.main`
  position: relative;
  z-index: 1;
`;


function App() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }, []);


  return (
    <>
      <GlobalStyle />
            
      {!isLoading && (
        <AppContainer>
          <FloatingHearts />
          <ContentContainer>
            <IntroSection />
          </ContentContainer>
        </AppContainer>
      )}
    </>
  );
}

export default App;