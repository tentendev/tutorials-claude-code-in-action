import { allLessons, getNextLesson, getPrevLesson } from '@/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const lesson = allLessons.find((l) => l.slug === slug);

    if (!lesson) {
        return {
            title: '找不到頁面 | Claude Code 實戰課程',
        };
    }

    const chapterNum = lesson.navTitle.split(' ')[0];
    const title = `${lesson.title} | Claude Code 實戰課程`;
    const description = `第 ${chapterNum} 章：${lesson.title}。${lesson.type} - 深入學習 Claude Code 編碼助手的實戰技巧。`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            siteName: 'Claude Code 實戰課程',
            locale: 'zh_TW',
            url: `https://tutorials-claude-code-in-action.vercel.app/course/${slug}`,
            images: [
                {
                    url: 'https://tutorials-claude-code-in-action.vercel.app/images/claude-code-tutorial-thumb.jpeg',
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://tutorials-claude-code-in-action.vercel.app/images/claude-code-tutorial-thumb.jpeg'],
        },
    };
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
