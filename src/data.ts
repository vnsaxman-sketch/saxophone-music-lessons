import type { Lesson } from './types';

export const lessons: Lesson[] = [
  {
    id: 'sax-fundamentals',
    title: {
      en: 'Saxophone Fundamentals',
      vi: 'Cơ Bản Saxophone',
    },
    description: {
      en: 'Embouchure, breathing, posture, tone production, fingering and basic technique.',
      vi: 'Khẩu hình, hơi thở, tư thế, tạo âm thanh, thế bấm và kỹ thuật cơ bản.',
    },
    level: 'beginner',
    duration: 60,
    icon: '🎷',
  },
  {
    id: 'music-theory',
    title: {
      en: 'Music Theory',
      vi: 'Lý Thuyết Âm Nhạc',
    },
    description: {
      en: 'Learn notes, scales, intervals, keys, chords, rhythm and musical notation.',
      vi: 'Học nốt nhạc, gam, quãng, giọng, hợp âm, tiết tấu và ký âm.',
    },
    level: 'beginner',
    duration: 60,
    icon: '🎼',
  },
  {
    id: 'scales-chords',
    title: {
      en: 'Scales & Chords',
      vi: 'Gam & Hợp Âm',
    },
    description: {
      en: 'Build technical confidence through major, minor, pentatonic and blues scales.',
      vi: 'Xây dựng kỹ thuật qua gam trưởng, thứ, ngũ cung và blues.',
    },
    level: 'intermediate',
    duration: 60,
    icon: '🎵',
  },
  {
    id: 'improvisation',
    title: {
      en: 'Improvisation',
      vi: 'Ứng Tấu',
    },
    description: {
      en: 'Learn how to create musical phrases over chord progressions.',
      vi: 'Học cách tạo câu nhạc và ứng tấu trên các vòng hợp âm.',
    },
    level: 'intermediate',
    duration: 60,
    icon: '🎶',
  },
  {
    id: 'ear-training',
    title: {
      en: 'Ear Training',
      vi: 'Luyện Tai Nghe',
    },
    description: {
      en: 'Develop your ability to recognize notes, intervals, rhythms and chords.',
      vi: 'Phát triển khả năng nhận biết nốt, quãng, tiết tấu và hợp âm.',
    },
    level: 'intermediate',
    duration: 60,
    icon: '👂',
  },
  {
    id: 'jazz-saxophone',
    title: {
      en: 'Jazz & Blues Saxophone',
      vi: 'Saxophone Jazz & Blues',
    },
    description: {
      en: 'Explore jazz phrasing, blues language, articulation and improvisation.',
      vi: 'Khám phá cách diễn đạt Jazz, ngôn ngữ Blues, articulation và ứng tấu.',
    },
    level: 'advanced',
    duration: 60,
    icon: '🎷',
  },
  {
    id: 'advanced-technique',
    title: {
      en: 'Advanced Saxophone',
      vi: 'Saxophone Nâng Cao',
    },
    description: {
      en: 'Advanced tone, articulation, altissimo, expression and performance skills.',
      vi: 'Kỹ thuật âm thanh, articulation, altissimo, biểu cảm và biểu diễn nâng cao.',
    },
    level: 'advanced',
    duration: 60,
    icon: '⭐',
  },
];

export const theoryTopics = [
  {
    icon: '🎵',
    title: {
      en: 'Notes & Staff',
      vi: 'Nốt Nhạc & Khuông Nhạc',
    },
    text: {
      en: 'Understand the musical staff, note names and basic notation.',
      vi: 'Tìm hiểu khuông nhạc, tên nốt và ký hiệu âm nhạc cơ bản.',
    },
  },
  {
    icon: '🎼',
    title: {
      en: 'Scales',
      vi: 'Gam',
    },
    text: {
      en: 'Learn major, natural minor, harmonic minor, pentatonic and blues scales.',
      vi: 'Học gam trưởng, thứ tự nhiên, thứ hòa thanh, ngũ cung và blues.',
    },
  },
  {
    icon: '🔢',
    title: {
      en: 'Intervals',
      vi: 'Quãng',
    },
    text: {
      en: 'Learn how the distance between two notes creates musical relationships.',
      vi: 'Tìm hiểu khoảng cách giữa hai nốt tạo nên các mối quan hệ âm nhạc.',
    },
  },
  {
    icon: '🎹',
    title: {
      en: 'Chords',
      vi: 'Hợp Âm',
    },
    text: {
      en: 'Understand triads, seventh chords and common chord progressions.',
      vi: 'Tìm hiểu hợp âm ba, hợp âm bảy và các vòng hợp âm thông dụng.',
    },
  },
  {
    icon: '🥁',
    title: {
      en: 'Rhythm',
      vi: 'Tiết Tấu',
    },
    text: {
      en: 'Practice beats, rests, time signatures and rhythmic patterns.',
      vi: 'Luyện phách, dấu lặng, số chỉ nhịp và các mẫu tiết tấu.',
    },
  },
  {
    icon: '🎷',
    title: {
      en: 'Saxophone Transposition',
      vi: 'Chuyển Giọng Saxophone',
    },
    text: {
      en: 'Understand why saxophones are transposing instruments and how to read concert pitch.',
      vi: 'Hiểu tại sao saxophone là nhạc cụ chuyển giọng và cách đọc cao độ hòa tấu.',
    },
  },
];
