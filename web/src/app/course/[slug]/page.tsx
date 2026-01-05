import { allLessons, getNextLesson, getPrevLesson } from '@/data';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return allLessons.map((lesson) => ({
        slug: lesson.slug,
    }));
}

export default async function LessonPage({ params }: Props) {
    const { slug } = await params;
    const lesson = allLessons.find((l) => l.slug === slug);

    if (!lesson) {
        notFound();
    }

    const prev = getPrevLesson(lesson.slug);
    const next = getNextLesson(lesson.slug);

    return (
        <main className="content-container">
            <header className="lesson-header">
                <div className="breadcrumb">Chapter {lesson.navTitle.split(' ')[0]}</div>
                <h1>{lesson.title}</h1>
                <div className="lesson-meta">
                    <span className="tag">{lesson.type}</span>
                    {lesson.sourceUrl && (
                        <span className="source-link">
                            <a href={lesson.sourceUrl} target="_blank" rel="noopener noreferrer">View Original Source</a>
                        </span>
                    )}
                </div>
            </header>

            <article className="prose" dangerouslySetInnerHTML={{ __html: lesson.content }} />

            <footer className="content-footer">
                {prev ? (
                    <a href={`/course/${prev.slug}`} className="nav-button prev">
                        &larr; {prev.navTitle.split(' ').slice(1).join(' ')}
                    </a>
                ) : (
                    <div /> // Spacer
                )}

                {next ? (
                    <a href={`/course/${next.slug}`} className="nav-button next">
                        {next.navTitle.split(' ').slice(1).join(' ')} &rarr;
                    </a>
                ) : (
                    <a href="/" className="nav-button next">
                        返回目錄 &rarr;
                    </a>
                )}
            </footer>
        </main>
    );
}
