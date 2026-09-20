import type { Language } from '../types';
import { t } from '../i18n';

interface ContactInstructorProps {
  language: Language;
}

export default function ContactInstructor({
  language,
}: ContactInstructorProps) {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <div className="contact-icon" aria-hidden="true">
          🎷
        </div>

        <div className="contact-content">
          <span className="eyebrow">
            {t(language, 'contactTitle')}
          </span>

          <h2>Long Nguyen</h2>

          <div className="contact-details">
            <a href="tel:+18584729931">
              <span aria-hidden="true">📱</span>
              <strong>{t(language, 'cellPhone')}:</strong>{' '}
              1 (858) 472-9931
            </a>

            <a href="mailto:long92196@gmail.com">
              <span aria-hidden="true">✉️</span>
              <strong>{t(language, 'emailAddress')}:</strong>{' '}
              long92196@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
