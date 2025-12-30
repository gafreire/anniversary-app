// src/data/timelineData.ts

// Importe todas as imagens no topo
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';
import image9 from '../images/9.jpg';
import image10 from '../images/10.jpg';
import image11 from '../images/11.jpg';
import image12 from '../images/12.jpg';
import image13 from '../images/13.jpg';
import image14 from '../images/14.jpg';

export interface TimelineItem {
  id: number;
  date: string;
  text: string;
  image: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: "10 de Novembro de 2024",
    text: "Nosso primeiro date juntos 💋",
    image: image1
  },
  {
    id: 2,
    date: "20 de Novembro de 2024",
    text: "Acho que to começando a me apaixonar por você 💖",
    image: image2
  },
  {
    id: 3,
    date: "26 de Novembro de 2024",
    text: "Vamos sair pra tomar um açai, que já estou com saudade de você 🍧",
    image: image3
  },
  {
    id: 4,
    date: "01 de Dezembro de 2024",
    text: "Dia de conhecer os sogrinhos 🏡",
    image: image4
  },
  {
    id: 5,
    date: "15 de Dezembro de 2024",
    text: "Nos assumimos para o mundo 🗺️",
    image: image5
  },
  {
    id: 6,
    date: "06 de Janeiro de 2025",
    text: "Começamos a namorar oficialmente 💍",
    image: image6
  },
  {
    id: 7,
    date: "06 de Janeiro de 2025",
    text: "Mais uma desse dia especial 💍",
    image: image7
  },
  {
    id: 8,
    date: "26 de Janeiro de 2025",
    text: "Nossa primeira viagem juntos 🌍",
    image: image8
  },
  {
    id: 9,
    date: "15 de Fevereiro de 2025",
    text: "Uma prainha juntos 🏖️",
    image: image9
  },
  {
    id: 10,
    date: "22 de Fevereiro de 2025",
    text: "Só porque estávamos lindos nesse dia 😍",
    image: image10
  },
  {
    id: 11,
    date: "02 de Maio de 2025",
    text: "Uma foto especial de uma viagem incrível 🏞️",
    image: image11
  },
  {
    id: 12,
    date: "02 de Maio de 2025",
    text: "Nossa melhor foto juntos 📸",
    image: image12
  },
  {
    id: 13,
    date: "02 de Maio de 2025",
    text: "Viajar com você é minha terapia ✈️",
    image: image13
  },
  {
    id: 14,
    date: "18 de Maio de 2025",
    text: "10km com sucesso 🏃‍♂️🏃‍♀️",
    image: image14
  }
];

export const reasonsData: string[] = [
  "Seu sorriso ilumina meu dia",
  "Você me entende como ninguém",
  "Seu abraço é meu lugar favorito",
  "Você me faz querer ser melhor",
  "Seus olhos são meu paraíso",
  "Você acredita em mim sempre",
  "Cada momento com você é especial",
  "Você me faz rir até nas horas difíceis",
  "Seu carinho me completa",
  "Você é minha melhor amiga",
  "Seu jeito único de ser",
  "Porque você é simplesmente você"
];