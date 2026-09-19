import type { Language } from '../types';
import { t } from '../i18n';

interface AgePolicyProps {
  language: Language;
}

export default function AgePolicy({ language }: AgePolicyProps) {
  return (
    <section className="policy-section">
      <div className="policy-card">
        <div className="policy-icon">👥</div>

        <div>
          <h3>{t(language, 'agePolicyTitle')}</h3>
          <p>{t(language, 'agePolicy')}</p>
        </div>
      </div>

      <div className="policy-columns">
        <div className="policy-option">
          <h3>🎷 {t(language, 'adultTitle')}</h3>
          <p>{t(language, 'adultText')}</p>
        </div>

        <div className="policy-option youth">
          <h3>👥 {t(language, 'youthTitle')}</h3>
          <p>{t(language, 'youthText')}</p>
        </div>
      </div>
    </section>
  );
}
