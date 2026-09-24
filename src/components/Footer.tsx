import type { Language } from '../types';
import { t } from '../i18n';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <strong>🎷 {t(language, 'brand')}</strong>
          <p>{t(language, 'footer')}</p>
        </div>

        <div className="footer-note">
          <span>English / Tiếng Việt</span>
        </div>

	<p className="deeloper-credit">
	  {t(language, 'developerCredit')}
	</p>  
      </div>
    </footer>
  );
}
