import { useState } from 'react';
import type { BookingRequest, Language } from '../types';
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
  lessonType: '',
  saxophone: 'alto',
  preferredDay: 'weekday',
  preferredTime: '',
  message: '',
};

export default function BookingForm({
  language,
}: BookingFormProps) {
  const [form, setForm] = useState<BookingRequest>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const updateField = (
    field: keyof BookingRequest,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleAgeChange = (value: string) => {
    const ageGroup = value as BookingRequest['ageGroup'];

    if (ageGroup === 'under18') {
      setForm((current) => ({
        ...current,
        ageGroup,
        lessonFormat: 'group',
        preferredDay: 'weekend',
      }));
    } else {
      setForm((current) => ({
        ...current,
        ageGroup,
        lessonFormat: 'individual',
        preferredDay: 'weekday',
      }));
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSending(true);
    setSubmitted(false);
    setError('');

    try {
      const formData = new FormData();

      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('ageGroup', form.ageGroup);
      formData.append('lessonFormat', form.lessonFormat);
      formData.append('level', form.level);
      formData.append('lessonType', form.lessonType);
      formData.append('saxophone', form.saxophone);
      formData.append('preferredDay', form.preferredDay);
      formData.append('preferredTime', form.preferredTime);
      formData.append('message', form.message);

      formData.append(
        '_subject',
        `New Saxophone Lesson Request from ${form.name}`
      );

      const response = await fetch(
        'https://formspree.io/f/mljdlnpz',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Keep a local copy as well.
      localStorage.setItem(
        'saxophone_lesson_request',
        JSON.stringify(form)
      );

      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setError(
        'Unable to send your request right now. Please try again or contact the instructor directly.'
      );
    } finally {
      setSending(false);
    }
  };

  const handleClear = () => {
    setForm(initialForm);
    setSubmitted(false);
    setError('');
  };

  return (
    <section className="booking-section">
      <div className="booking-card">
        <div className="section-heading">
          <span className="eyebrow">
            {t(language, 'bookingTitle')}
          </span>

          <h2>{t(language, 'bookingTitle')}</h2>
        </div>

        {submitted && (
          <div className="success-message" role="status">
            <strong>{t(language, 'requestSent')}</strong>
            <p>{t(language, 'requestNote')}</p>
          </div>
        )}

        {error && (
          <div className="error-message" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">
                {t(language, 'name')}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(e) =>
                  updateField('name', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                {t(language, 'email')}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  updateField('email', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                {t(language, 'phone')}
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  updateField('phone', e.target.value)
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ageGroup">
                {t(language, 'ageGroup')}
              </label>

              <select
                id="ageGroup"
                name="ageGroup"
                value={form.ageGroup}
                onChange={(e) =>
                  handleAgeChange(e.target.value)
                }
              >
                <option value="adult">
                  {t(language, 'adult')}
                </option>

                <option value="under18">
                  {t(language, 'under18')}
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="lessonFormat">
                {t(language, 'format')}
              </label>

              <select
                id="lessonFormat"
                name="lessonFormat"
                value={form.lessonFormat}
                onChange={(e) =>
                  updateField(
                    'lessonFormat',
                    e.target.value
                  )
                }
                disabled={form.ageGroup === 'under18'}
              >
                <option value="individual">
                  {t(language, 'individual')}
                </option>

                <option value="group">
                  {t(language, 'group')}
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="level">
                {t(language, 'level')}
              </label>

              <select
                id="level"
                name="level"
                value={form.level}
                onChange={(e) =>
                  updateField('level', e.target.value)
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
            </div>

            <div className="form-group">
              <label htmlFor="lessonType">
                {t(language, 'lessonType')}
              </label>

              <input
                id="lessonType"
                name="lessonType"
                type="text"
                value={form.lessonType}
                onChange={(e) =>
                  updateField(
                    'lessonType',
                    e.target.value
                  )
                }
                placeholder="Example: Saxophone Fundamentals"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="saxophone">
                {t(language, 'saxophone')}
              </label>

              <select
                id="saxophone"
                name="saxophone"
                value={form.saxophone}
                onChange={(e) =>
                  updateField(
                    'saxophone',
                    e.target.value
                  )
                }
              >
                <option value="alto">
                  {t(language, 'alto')}
                </option>

                <option value="tenor">
                  {t(language, 'tenor')}
                </option>

                <option value="soprano">
                  {t(language, 'soprano')}
                </option>

                <option value="baritone">
                  {t(language, 'baritone')}
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preferredDay">
                {t(language, 'preferredDay')}
              </label>

              <select
                id="preferredDay"
                name="preferredDay"
                value={form.preferredDay}
                onChange={(e) =>
                  updateField(
                    'preferredDay',
                    e.target.value
                  )
                }
              >
                {form.ageGroup === 'under18' ? (
                  <option value="weekend">
                    {t(language, 'weekend')}
                  </option>
                ) : (
                  <>
                    <option value="weekday">
                      {t(language, 'weekday')}
                    </option>

                    <option value="weekend">
                      {t(language, 'weekend')}
                    </option>
                  </>
                )}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime">
                {t(language, 'preferredTime')}
              </label>

              <input
                id="preferredTime"
                name="preferredTime"
                type="text"
                value={form.preferredTime}
                onChange={(e) =>
                  updateField(
                    'preferredTime',
                    e.target.value
                  )
                }
                placeholder="Example: 6:00 PM"
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">
                {t(language, 'message')}
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) =>
                  updateField('message', e.target.value)
                }
                rows={5}
                placeholder="Tell me anything you'd like me to know."
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="primary-button"
              disabled={sending}
            >
              {sending
                ? 'Sending...'
                : t(language, 'submit')}
            </button>

            <button
              type="button"
              className="secondary-button"
              onClick={handleClear}
              disabled={sending}
            >
              {t(language, 'clear')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
