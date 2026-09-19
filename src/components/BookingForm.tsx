import { useState } from 'react';
import type {
  BookingRequest,
  Language,
  LessonFormat,
  LessonLevel,
  StudentAge,
} from '../types';
import { lessons } from '../data';
import { t } from '../i18n';

interface BookingFormProps {
  language: Language;
}

const initialForm: BookingRequest = {
  name: '',
  email: '',
  phone: '',
  ageGroup: 'adult',
  lessonFormat: 'individual',
  level: 'beginner',
  lessonType: lessons[0].id,
  saxophone: 'alto',
  preferredDay: '',
  preferredTime: '',
  message: '',
};

export default function BookingForm({ language }: BookingFormProps) {
  const [form, setForm] = useState<BookingRequest>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof BookingRequest>(
    field: K,
    value: BookingRequest[K]
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
    setSubmitted(false);
  };

  const handleAgeChange = (age: StudentAge) => {
    if (age === 'under18') {
      setForm((current) => ({
        ...current,
        ageGroup: age,
        lessonFormat: 'group',
        preferredDay: 'weekend',
      }));
    } else {
      setForm((current) => ({
        ...current,
        ageGroup: age,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    localStorage.setItem(
      'saxophone_lesson_request',
      JSON.stringify(form)
    );

    setSubmitted(true);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      {submitted && (
        <div className="success-message">
          <strong>{t(language, 'requestSent')}</strong>
          <span>{t(language, 'requestNote')}</span>
        </div>
      )}

      <div className="form-grid">
        <label>
          {t(language, 'name')}
          <input
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
          />
        </label>

        <label>
          {t(language, 'email')}
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />
        </label>

        <label>
          {t(language, 'phone')}
          <input
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </label>

        <label>
          {t(language, 'ageGroup')}
          <select
            value={form.ageGroup}
            onChange={(e) =>
              handleAgeChange(e.target.value as StudentAge)
            }
          >
            <option value="adult">{t(language, 'adult')}</option>
            <option value="under18">{t(language, 'under18')}</option>
          </select>
        </label>

        <label>
          {t(language, 'format')}
          <select
            value={form.lessonFormat}
            onChange={(e) =>
              update('lessonFormat', e.target.value as LessonFormat)
            }
            disabled={form.ageGroup === 'under18'}
          >
            <option value="individual">
              {t(language, 'individual')}
            </option>
            <option value="group">{t(language, 'group')}</option>
          </select>
        </label>

        <label>
          {t(language, 'level')}
          <select
            value={form.level}
            onChange={(e) =>
              update('level', e.target.value as LessonLevel)
            }
          >
            <option value="beginner">
              {t(language, 'beginner')}
            </option>
            <option value="intermediate">
              {t(language, 'intermediate')}
            </option>
            <option value="advanced">
              {t(language, 'advanced')}
            </option>
          </select>
        </label>

        <label>
          {t(language, 'lessonType')}
          <select
            value={form.lessonType}
            onChange={(e) => update('lessonType', e.target.value)}
          >
            {lessons.map((lesson) => (
              <option key={lesson.id} value={lesson.id}>
                {lesson.title[language]}
              </option>
            ))}
          </select>
        </label>

        <label>
          {t(language, 'saxophone')}
          <select
            value={form.saxophone}
            onChange={(e) => update('saxophone', e.target.value)}
          >
            <option value="alto">{t(language, 'alto')}</option>
            <option value="tenor">{t(language, 'tenor')}</option>
            <option value="soprano">{t(language, 'soprano')}</option>
            <option value="baritone">{t(language, 'baritone')}</option>
          </select>
        </label>

        <label>
          {t(language, 'preferredDay')}
          <select
            value={form.preferredDay}
            onChange={(e) => update('preferredDay', e.target.value)}
          >
            {form.ageGroup === 'under18' ? (
              <option value="weekend">
                {t(language, 'weekend')}
              </option>
            ) : (
              <>
                <option value="">--</option>
                <option value="weekday">
                  {t(language, 'weekday')}
                </option>
                <option value="weekend">
                  {t(language, 'weekend')}
                </option>
              </>
            )}
          </select>
        </label>

        <label>
          {t(language, 'preferredTime')}
          <input
            type="time"
            value={form.preferredTime}
            onChange={(e) => update('preferredTime', e.target.value)}
          />
        </label>
      </div>

      {form.ageGroup === 'under18' && (
        <div className="youth-warning">
          ⚠️ {t(language, 'youthWarning')}
        </div>
      )}

      <label className="message-field">
        {t(language, 'message')}
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
        />
      </label>

      <div className="form-actions">
        <button type="submit" className="primary-button">
          {t(language, 'submit')}
        </button>

        <button
          type="button"
          className="secondary-button"
          onClick={() => setForm(initialForm)}
        >
          {t(language, 'clear')}
        </button>
      </div>
    </form>
  );
}
