import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date("2025-10-21T00:00:00").getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-hero-from to-hero-to opacity-20 blur-xl rounded-2xl"></div>
        <div className="relative bg-card border-2 border-primary/20 rounded-2xl px-6 py-4 min-w-[100px] shadow-elegant">
          <span className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-hero-from to-hero-to bg-clip-text text-transparent">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-3 text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-8 text-foreground">
        Faltam para o início de uma nova cultura automotiva no Brasil:
      </h2>
      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        <TimeUnit value={timeLeft.days} label="Dias" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );
};

export default Countdown;
