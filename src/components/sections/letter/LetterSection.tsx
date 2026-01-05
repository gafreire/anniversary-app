import {
  EnvelopeIcon,
  Hearts,
  LetterContainer,
  LetterContent,
  LetterTitle,
  SectionContainer,
  Signature,
} from "./LetterSection.styles";

export function LetterSection() {
  return (
    <SectionContainer id="letter">
      <LetterContainer
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Hearts>💕</Hearts>
        <EnvelopeIcon>💌</EnvelopeIcon>

        <LetterTitle>Uma Cartinha Para Você</LetterTitle>

        <LetterContent>
          <p>
            E finalmente chegou, o dia que eu nunca imaginei que viveria ao seu
            lado. Hoje fazemos 1 ano juntos.
          </p>

          <p>
            Desde o nosso primeiro encontro, eu soube que havia algo especial
            entre nós. Cada momento que passamos juntos só confirmou o que eu já
            sentia no meu coração.
          </p>

          <p>
            E hoje, você é a pessoa mais importante da minha vida. A pessoa com
            quem eu quero compartilhar todos os meus sonhos, alegrias e
            desafios.
          </p>

          <p>
            Eu queria agradecer por cada momento que passamos juntos, por cada abraço, por cada beijo que foram e sempre vão ser inesquecíveis.
          </p>

          <p>
            Você me faz sentir amado, valorizado e feliz de uma maneira que eu
            nunca pensei ser possível. Eu sou tão grato por ter você ao meu
            lado.
          </p>

          <p>Esse foi só o primeiro de muitos. Obrigado por ser tão especial. Eu te amo 💖</p>
        </LetterContent>

        <Signature>
          Com carinho,
          <br />
          Gabriel
        </Signature>
      </LetterContainer>
    </SectionContainer>
  );
}
