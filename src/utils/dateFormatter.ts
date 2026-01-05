// src/utils/dateFormatter.ts

export interface DurationParts {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateDuration(startDate: Date): DurationParts {
  const now = new Date();
  
  // Calcula meses de forma precisa
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  
  // Ajusta se o dia atual for menor que o dia inicial
  if (now.getDate() < startDate.getDate()) {
    months--;
  }
  
  // Ajusta meses negativos
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const totalMonths = years * 12 + months;
  
  // Calcula dias restantes
  const lastMonthDate = new Date(now.getFullYear(), now.getMonth(), startDate.getDate());
  if (now.getDate() < startDate.getDate()) {
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
  }
  
  const diffMs = now.getTime() - lastMonthDate.getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const remainingAfterDays = totalSeconds % (24 * 60 * 60);
  
  const hours = Math.floor(remainingAfterDays / 3600);
  const remainingAfterHours = remainingAfterDays % 3600;
  
  const minutes = Math.floor(remainingAfterHours / 60);
  const seconds = remainingAfterHours % 60;

  return { 
    months: totalMonths, 
    days, 
    hours, 
    minutes, 
    seconds 
  };
}

export function formatDuration(duration: DurationParts): string {
  const parts: string[] = [];

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