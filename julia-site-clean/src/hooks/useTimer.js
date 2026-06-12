import { useState, useEffect } from 'react';

const START = new Date('2024-02-04T00:00:00');

function calcTime() {
  const now = new Date();
  const diff = now - START;

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);

  // months/years using actual calendar
  const y = now.getFullYear() - START.getFullYear();
  const m = now.getMonth() - START.getMonth() + y * 12;
  const years = Math.floor(m / 12);
  const months = m % 12;
  const days = Math.floor((now - new Date(START.getFullYear() + years, START.getMonth() + months, START.getDate())) / 86400000);

  return { years, months, days, hours, minutes, seconds, totalDays };
}

export function useTimer() {
  const [time, setTime] = useState(calcTime());

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
