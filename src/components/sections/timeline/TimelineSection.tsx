import { timelineData } from '../../../utils/timelineData';
import { DateLabel, Description, FinalMessage, Photo, PhotoCard, SectionContainer, SectionTitle, TimelineContainer, TimelineContent, TimelineDot, TimelineItem, TimelineLine } from './TimelineSection.styles';

export function TimelineSection() {
  return (
    <SectionContainer id="timeline">
      <SectionTitle
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Nossa História 📸
      </SectionTitle>

      <TimelineContainer>
        <TimelineLine />
        
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.id}
            isLeft={index % 2 === 0}
            initial={{ 
              opacity: 0, 
              x: index % 2 === 0 ? -50 : 50 
            }}
            whileInView={{ 
              opacity: 1, 
              x: 0 
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6,
              delay: 0.1
            }}
          >
            <TimelineDot />
            <TimelineContent isLeft={index % 2 === 0}>
              <DateLabel>{item.date}</DateLabel>
              <PhotoCard>
                <Photo src={item.image} alt={item.text} />
                <Description>{item.text}</Description>
              </PhotoCard>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>

      <FinalMessage
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3>E muito mais vem por aí... 💫</h3>
        <p>
          Mal posso esperar para criar mais memórias incríveis com você!
        </p>
      </FinalMessage>
    </SectionContainer>
  );
}