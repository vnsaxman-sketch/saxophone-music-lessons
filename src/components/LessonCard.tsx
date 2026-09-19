import type { Language, Lesson } from '../types';
import { t } from '../i18n';

interface LessonCardProps {
  lesson: Lesson;
  language: Language;
  onBook: () => void;
}

export default function LessonCard({
  lesson,
  language,
  onBook,
}: LessonCardProps) {
  const level = t(language, lesson.level);

  return (
    <article className="lesson-card">
      <div className="lesson-icon">{lesson.icon}</div>

      <div className="lesson-content">
        <span className="level-badge">{level}</span>

        <h3>{lesson.title[language]}</h3>

        <p>{lesson.description[language]}</p>

        <div className="lesson-footer">
          <span>⏱ {lesson.duration} min</span>

          <button className="small-button" onClick={onBook}>
            {t(language, 'bookingButton')}
          </button>
        </div>
      </div>
    </article>
  );
}
