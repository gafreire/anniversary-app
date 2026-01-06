// src/utils/dateFormatter.ts

export interface DurationParts {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateDuration(startDate: Date): DurationParts {
  const now = new Date();
  
  // Calcula anos completos
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  
  // Ajusta se o dia atual for menor
  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
  
  // Ajusta se o mês atual for menor
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Calcula horas, minutos e segundos do dia atual
  const hoursStart = startDate.getHours();
  const minutesStart = startDate.getMinutes();
  const secondsStart = startDate.getSeconds();
  
  const hoursNow = now.getHours();
  const minutesNow = now.getMinutes();
  const secondsNow = now.getSeconds();
  
  let hours = hoursNow - hoursStart;
  let minutes = minutesNow - minutesStart;
  let seconds = secondsNow - secondsStart;
  
  // Ajusta segundos
  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }
  
  // Ajusta minutos
  if (minutes < 0) {
    hours--;
    minutes += 60;
  }
  
  // Ajusta horas
  if (hours < 0) {
    days--;
    hours += 24;
  }
  
  // Se dias ficou negativo, ajusta novamente
  if (days < 0) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }

  return { 
    years,
    months, 
    days, 
    hours, 
    minutes, 
    seconds 
  };
}

export function formatDuration(duration: DurationParts): string {
  const parts: string[] = [];

  if (duration.years > 0) {
    parts.push(`${duration.years} ${duration.years > 1 ? 'anos' : 'ano'}`);
  }
  if (duration.months > 0) {
    parts.push(`${duration.months} ${duration.months > 1 ? 'meses' : 'mês'}`);
  }
  if (duration.days > 0) {
    parts.push(`${duration.days} ${duration.days > 1 ? 'dias' : 'dia'}`);
  }
  if (duration.hours > 0) {
    parts.push(`${duration.hours}h`);
  }
  if (duration.minutes > 0) {
    parts.push(`${duration.minutes}m`);
  }
  if (duration.seconds > 0 || parts.length === 0) {
    parts.push(`${duration.seconds}s`);
  }

  return parts.join(' ');
}