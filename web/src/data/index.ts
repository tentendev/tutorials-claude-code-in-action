
import { lessonsPart1, Lesson } from './lessons-part1';
import { lessonsPart2 } from './lessons-part2';

export const allLessons: Lesson[] = [
    ...lessonsPart1,
    ...lessonsPart2
];

export function getLessonBySlug(slug: string): Lesson | undefined {
    return allLessons.find(l => l.slug === slug);
}

export function getNextLesson(currentSlug: string): Lesson | undefined {
    const index = allLessons.findIndex(l => l.slug === currentSlug);
    if (index >= 0 && index < allLessons.length - 1) {
        return allLessons[index + 1];
    }
    return undefined;
}

export function getPrevLesson(currentSlug: string): Lesson | undefined {
    const index = allLessons.findIndex(l => l.slug === currentSlug);
    if (index > 0) {
        return allLessons[index - 1];
    }
    return undefined;
}
