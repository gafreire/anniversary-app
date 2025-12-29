
import { useCountdown } from '../../../utils/useCountdown';
import { CardsContainer, CounterCard, CounterLabel, CounterValue, HeartIcon, SectionContainer, SectionTitle } from './CountersSection.styles';

export function CountersSection() {
  const startLove = new Date('2025-01-06T20:00:00');
  const startKiss = new Date('2024-10-27T22:00:00');

  const loveCounter = useCountdown(startLove);
  const kissCounter = useCountdown(startKiss);

  return (
    <SectionContainer id="counters">
      <SectionTitle
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Nosso Amor em<br />Cada Segundo ❤️
      </SectionTitle>

      <CardsContainer>
        <CounterCard
          variant="gradient"
          hoverable
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeartIcon>💑</HeartIcon>
          <CounterLabel>Desde que começamos a namorar:</CounterLabel>
          <CounterValue>{loveCounter.formatted}</CounterValue>
        </CounterCard>

        <CounterCard
          variant="gradient"
          hoverable
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <HeartIcon>💋</HeartIcon>
          <CounterLabel>Desde o nosso primeiro beijo:</CounterLabel>
          <CounterValue>{kissCounter.formatted}</CounterValue>
        </CounterCard>
      </CardsContainer>
    </SectionContainer>
  );
}