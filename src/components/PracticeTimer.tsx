import { useEffect, useState } from 'react';
import type { Language } from '../types';
import { t } from '../i18n';

interface PracticeTimerProps {
  language: Language;
}

export default function PracticeTimer({
  language,
}: PracticeTimerProps) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }

    const timer = window.setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [running]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="practice-timer">
      <h3>{t(language, 'practiceTimer')}</h3>

      <div className="timer-display">
        {String(minutes).padStart(2, '0')}:
        {String(remainingSeconds).padStart(2, '0')}
      </div>

      <div className="timer-buttons">
        <button
          className="primary-button"
          onClick={() => setRunning((value) => !value)}
        >
          {running
            ? t(language, 'pause')
            : t(language, 'start')}
        </button>

        <button
          className="secondary-button"
          onClick={() => {
            setRunning(false);
            setSeconds(0);
          }}
        >
          {t(language, 'reset')}
        </button>
      </div>
    </div>
  );
}
