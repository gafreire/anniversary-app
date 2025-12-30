import { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { IntroSection } from "./components/sections/intro/IntroSection";
import { FloatingHearts } from "./components/layout/FloatingHearts";
import { CountersSection } from "./components/sections/counters/CountersSection";
import { ReasonsSection } from "./components/sections/reasons/ReasonsSection";

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
  const [ , setCurrentSection] = useState('intro');


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleNext = () => {
    setCurrentSection("counters");
    const countersElement = document.getElementById("counters");
    countersElement?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <GlobalStyle />

      {!isLoading && (
        <AppContainer>
          <FloatingHearts />
          <ContentContainer>
            <IntroSection onNext={handleNext} />
            <CountersSection />
            <ReasonsSection />
          </ContentContainer>
        </AppContainer>
      )}
    </>
  );
}

export default App;
