import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LessonCard from './components/LessonCard';
import AgePolicy from './components/AgePolicy';
import BookingForm from './components/BookingForm';
import PracticeTimer from './components/PracticeTimer';
import ContactInstructor from './components/ContactInstructor';
import { lessons, theoryTopics } from './data';
import type { Language } from './types';
import { t } from './i18n';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activePage, setActivePage] = useState('home');

  const goTo = (page: string) => {
    setActivePage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const renderHome = () => (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            🎷 MUSIC EDUCATION • SAXOPHONE • THEORY
          </div>

          <h1>{t(language, 'heroTitle')}</h1>

          <p>{t(language, 'heroText')}</p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => goTo('lessons')}
            >
              {t(language, 'heroButton')}
            </button>

            <button
              className="secondary-button"
              onClick={() => goTo('booking')}
            >
              {t(language, 'bookingButton')}
            </button>
          </div>
        </div>

        <div className="hero-saxophone">
          <div className="sax-glow">🎷</div>
        </div>
      </section>

      <section className="section">
        <AgePolicy language={language} />
	<ContactInstructor language={language} />
      </section>
      
      <section className="audio-section">
  	<h2>Listen to My Practice Sessions</h2>

  	<audio
  	controls
  	controlsList="nodownload"
  	preload="metadata"
  	onContextMenu={(e) => e.preventDefault()}
	>
  	 <source
    	  src={`${import.meta.env.BASE_URL}mambo-influenciado.mp3`}
    	  type="audio/mpeg"
  	 />
  	  Your browser does not support audio playback.
	</audio>

	<audio
  	controls
  	controlsList="nodownload"
  	preload="metadata"
  	onContextMenu={(e) => e.preventDefault()}
	>
  	 <source
    	  src={`${import.meta.env.BASE_URL}conn-soprano.mp3`}
    	  type="audio/mpeg"
  	 />
  	  Your browser does not support audio playback.
	</audio>

	<audio
  	controls
  	controlsList="nodownload"
  	preload="metadata"
  	onContextMenu={(e) => e.preventDefault()}
	>
  	 <source
    	  src={`${import.meta.env.BASE_URL}selmer-sba.mp3`}
    	  type="audio/mpeg"
  	 />
  	  Your browser does not support audio playback.
	</audio>

      </section>

      <section className="section light-section">
        <div className="section-heading">
          <span className="eyebrow">🎼 LESSON PROGRAM</span>
          <h2>{t(language, 'lessonsTitle')}</h2>
          <p>{t(language, 'lessonsText')}</p>
        </div>

        <div className="lesson-grid">
          {lessons.slice(0, 4).map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              language={language}
              onBook={() => goTo('booking')}
            />
          ))}
        </div>

        <div className="center-button">
          <button
            className="secondary-button"
            onClick={() => goTo('lessons')}
          >
            {t(language, 'heroButton')}
          </button>
        </div>
      </section>
    </>
  );

  const renderLessons = () => (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">🎷 SAXOPHONE & THEORY</span>
        <h1>{t(language, 'lessonsTitle')}</h1>
        <p>{t(language, 'lessonsText')}</p>
      </div>

      <div className="lesson-grid">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            language={language}
            onBook={() => goTo('booking')}
          />
        ))}
      </div>

      <AgePolicy language={language} />
    </section>
  );

  const renderTheory = () => (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">🎼 THEORY</span>
        <h1>{t(language, 'theoryTitle')}</h1>
        <p>{t(language, 'theoryText')}</p>
      </div>

      <div className="theory-grid">
        {theoryTopics.map((topic) => (
          <article className="theory-card" key={topic.title.en}>
            <div className="theory-icon">{topic.icon}</div>
            <h3>{topic.title[language]}</h3>
            <p>{topic.text[language]}</p>
          </article>
        ))}
      </div>
    </section>
  );

  const renderPractice = () => (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">🎵 PRACTICE</span>
        <h1>{t(language, 'practiceTitle')}</h1>
        <p>{t(language, 'practiceText')}</p>
      </div>

      <div className="practice-grid">
        <PracticeTimer language={language} />

        <article className="practice-card">
          <div className="practice-icon">🎷</div>
          <h3>
            {language === 'en'
              ? 'Daily Saxophone Routine'
              : 'Lịch Luyện Saxophone Hàng Ngày'}
          </h3>

          <ul>
            <li>
              {language === 'en'
                ? '5 min — Breathing'
                : '5 phút — Luyện hơi'}
            </li>
            <li>
              {language === 'en'
                ? '10 min — Long tones'
                : '10 phút — Âm dài'}
            </li>
            <li>
              {language === 'en'
                ? '10 min — Scales'
                : '10 phút — Gam'}
            </li>
            <li>
              {language === 'en'
                ? '15 min — Repertoire'
                : '15 phút — Bài nhạc'}
            </li>
            <li>
              {language === 'en'
                ? '10 min — Improvisation'
                : '10 phút — Ứng tấu'}
            </li>
          </ul>
        </article>
      </div>
    </section>
  );

  const renderBooking = () => (
    <section className="page-section">
      <div className="section-heading">
        <span className="eyebrow">📅 BOOKING</span>
        <h1>{t(language, 'bookingTitle')}</h1>
        <p>{t(language, 'agePolicy')}</p>
      </div>

      <BookingForm language={language} />
      <ContactInstructor language={language} />
    </section>

  );

  const renderAbout = () => (
    <section className="page-section about-page">
      <div className="section-heading">
        <span className="eyebrow">🎷 ABOUT</span>
        <h1>{t(language, 'aboutTitle')}</h1>
      </div>

      <div className="about-card">
        <div className="about-image">🎷</div>

        <div>
          <p className="large-text">
            {t(language, 'aboutText')}
          </p>

          <div className="about-features">
            <div>
              <strong>🎼</strong>
              <span>
                {language === 'en'
                  ? 'Music Theory'
                  : 'Lý Thuyết Âm Nhạc'}
              </span>
            </div>

            <div>
              <strong>🎷</strong>
              <span>
                {language === 'en'
                  ? 'Saxophone'
                  : 'Saxophone'}
              </span>
            </div>

            <div>
              <strong>👥</strong>
              <span>
                {language === 'en'
                  ? 'Small Groups'
                  : 'Nhóm Nhỏ'}
              </span>
            </div>

            <div>
              <strong>🌎</strong>
              <span>
                {language === 'en'
                  ? 'English / Vietnamese'
                  : 'Anh / Việt'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <AgePolicy language={language} />
    </section>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'lessons':
        return renderLessons();

      case 'theory':
        return renderTheory();

      case 'practice':
        return renderPractice();

      case 'booking':
        return renderBooking();

      case 'about':
        return renderAbout();

      default:
        return renderHome();
    }
  };

  return (
    <div className="app">
      <Header
        language={language}
        setLanguage={setLanguage}
        activePage={activePage}
        setActivePage={goTo}
      />

      <main>{renderPage()}</main>

      <Footer language={language} />
    </div>
  );
}

export default App;
