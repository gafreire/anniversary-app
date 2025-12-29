/* eslint-disable react-hooks/purity */

import { FloatingContainer, Heart } from "./FloatingHearts.styles";

export function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 4,
  }));

  return (
    <FloatingContainer>
      {hearts.map(heart => (
        <Heart
          key={heart.id}
          left={heart.left}
          delay={heart.delay}
          duration={heart.duration}
        />
      ))}
    </FloatingContainer>
  );
}