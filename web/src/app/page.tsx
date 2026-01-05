import { allLessons } from '@/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude Code 實戰課程 | 課程目錄',
  description: '學習如何使用 Anthropic 的 Claude Code 編碼助手。涵蓋安裝配置、上下文管理、自定義命令、MCP 伺服器、GitHub 整合、Hooks 等實戰技巧。',
  openGraph: {
    title: 'Claude Code 實戰課程',
    description: '學習如何使用 Anthropic 的 Claude Code 編碼助手。涵蓋安裝配置、上下文管理、自定義命令、MCP 伺服器、GitHub 整合、Hooks 等實戰技巧。',
    type: 'website',
    siteName: 'Claude Code 實戰課程',
    locale: 'zh_TW',
    url: 'https://tutorials-claude-code-in-action.vercel.app/',
    images: [
      {
        url: 'https://tutorials-claude-code-in-action.vercel.app/images/claude-code-tutorial-thumb.jpeg',
        width: 1200,
        height: 630,
        alt: 'Claude Code 實戰課程',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude Code 實戰課程',
    description: '學習如何使用 Anthropic 的 Claude Code 編碼助手。',
    images: ['https://tutorials-claude-code-in-action.vercel.app/images/claude-code-tutorial-thumb.jpeg'],
  },
};

export default function Home() {
  return (
    <main className="content-container">
      <header className="lesson-header">
        <div className="breadcrumb">Course Overview</div>
        <h1>課程目錄</h1>
      </header>

      <div className="prose">
        <p>歡迎來到 Claude Code 實戰課程。本課程將帶你深入了解 Anthropic 的新一代編碼助手。</p>

        <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
          {allLessons.map(lesson => (
            <a
              key={lesson.slug}
              href={`/course/${lesson.slug}`}
              className="course-card"
              style={{
                display: 'block',
                padding: '1.5rem',
                backgroundColor: '#fff',
                border: '1px solid #dcd8d0',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {lesson.navTitle.split(' ')[0]}
              </div>
              <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-headings)', fontWeight: '400', marginBottom: '0.5rem' }}>
                {lesson.title}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="tag" style={{ fontSize: '0.7rem' }}>{lesson.type}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
