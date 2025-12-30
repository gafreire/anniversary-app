import { useState } from 'react';
import { motion } from 'framer-motion';
import { CardBack, CardContainer, CardFront, CardInner, CardLabel, CardNumber, colors, Grid, HeartIcon, ReasonText, SectionContainer, SectionTitle } from './ReasonsSection.styles';
import { reasonsData } from '../../../utils/timelineData';



export function ReasonsSection() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardClick = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <SectionContainer id="reasons">
      <SectionTitle
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Motivos Porque<br />Eu Te Amo ✨
      </SectionTitle>

      <Grid>
        {reasonsData.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <CardContainer onClick={() => handleCardClick(index)}>
              <CardInner isFlipped={flippedCards.has(index)}>
                <CardFront color={colors[index % colors.length]}>
                  <CardNumber>#{index + 1}</CardNumber>
                  <CardLabel>Clique para revelar</CardLabel>
                </CardFront>
                <CardBack>
                  <HeartIcon>💖</HeartIcon>
                  <ReasonText>{reason}</ReasonText>
                </CardBack>
              </CardInner>
            </CardContainer>
          </motion.div>
        ))}
      </Grid>
    </SectionContainer>
  );
}