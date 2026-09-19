import type { Language } from '../types';
import { t } from '../i18n';

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Header({
  language,
  setLanguage,
  activePage,
  setActivePage,
}: HeaderProps) {
  const nav = [
    ['home', t(language, 'navHome')],
    ['lessons', t(language, 'navLessons')],
    ['theory', t(language, 'navTheory')],
    ['practice', t(language, 'navPractice')],
    ['booking', t(language, 'navBooking')],
    ['about', t(language, 'navAbout')],
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <button className="brand" onClick={() => setActivePage('home')}>
          <span className="brand-icon">🎷</span>
          <span>{t(language, 'brand')}</span>
        </button>

        <nav className="nav">
          {nav.map(([id, label]) => (
            <button
              key={id}
              className={activePage === id ? 'nav-button active' : 'nav-button'}
              onClick={() => setActivePage(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="language-switcher">
          <button
            className={language === 'en' ? 'language active' : 'language'}
            onClick={() => setLanguage('en')}
          >
            ENGLISH
          </button>

          <button
            className={language === 'vi' ? 'language active' : 'language'}
            onClick={() => setLanguage('vi')}
          >
            VIETNAMESE
          </button>
        </div>
      </div>
    </header>
  );
}
