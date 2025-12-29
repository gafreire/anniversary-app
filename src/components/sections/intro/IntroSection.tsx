import { Button } from '../../UI/Button';
import { ContentWrapper, HeartContainer, HeartSVG, Names, NamesContainer, ScrollIndicator, SectionContainer, Title } from './IntroSections.styles';

// interface IntroSectionProps {
//   onNext: () => void;
// }

export function IntroSection() {
  return (
    <SectionContainer id="intro">
      <ContentWrapper>
        <HeartContainer>
          <HeartSVG viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3,0-5.6,1.9-7.6,4.3C14,1.9,11.4,0,8.4,0C3.6,0,0,3.9,0,8.8c0,9.1,16,20.8,16,20.8s16-11.7,16-20.8C32,3.9,28.4,0,23.6,0z" />
          </HeartSVG>
        </HeartContainer>

        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Feliz Dia dos<br />Namorados 💘
        </Title>

        <NamesContainer>
          <Names>Gabriel + Ana</Names>
        </NamesContainer>

        <Button
          size="large"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Começar
          <ScrollIndicator
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </ScrollIndicator>
        </Button>
      </ContentWrapper>
    </SectionContainer>
  );
}