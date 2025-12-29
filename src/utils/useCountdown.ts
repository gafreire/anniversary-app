import { useState, useEffect } from 'react';
import { calculateDuration, formatDuration, type DurationParts } from './dateFormatter';

export function useCountdown(startDate: Date) {
  const [duration, setDuration] = useState<DurationParts>(calculateDuration(startDate));
  const [formatted, setFormatted] = useState<string>(formatDuration(duration));

  useEffect(() => {
    const updateDuration = () => {
      const newDuration = calculateDuration(startDate);
      setDuration(newDuration);
      setFormatted(formatDuration(newDuration));
    };

    updateDuration();

    const interval = setInterval(updateDuration, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return { duration, formatted };
}