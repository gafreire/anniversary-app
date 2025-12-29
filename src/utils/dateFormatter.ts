export interface DurationParts {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function calculateDuration(startDate: Date): DurationParts {
  const now = new Date();
  const totalSeconds = Math.floor((now.getTime() - startDate.getTime()) / 1000);

  const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
  const remainingAfterMonths = totalSeconds % (30 * 24 * 60 * 60);
  
  const days = Math.floor(remainingAfterMonths / (24 * 60 * 60));
  const remainingAfterDays = remainingAfterMonths % (24 * 60 * 60);
  
  const hours = Math.floor(remainingAfterDays / 3600);
  const remainingAfterHours = remainingAfterDays % 3600;
  
  const minutes = Math.floor(remainingAfterHours / 60);
  const seconds = remainingAfterHours % 60;

  return { months, days, hours, minutes, seconds };
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