export type Language = 'en' | 'vi';

export type LessonLevel = 'beginner' | 'intermediate' | 'advanced';

export type LessonFormat = 'individual' | 'group';

export type StudentAge = 'adult' | 'under18';

export interface Lesson {
  id: string;
  title: {
    en: string;
    vi: string;
  };
  description: {
    en: string;
    vi: string;
  };
  level: LessonLevel;
  duration: number;
  icon: string;
}

export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  ageGroup: StudentAge;
  lessonFormat: LessonFormat;
  level: LessonLevel;
  lessonType: string;
  saxophone: string;
  preferredDay: string;
  preferredTime: string;
  message: string;
}
