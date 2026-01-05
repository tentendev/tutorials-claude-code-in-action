
import Link from 'next/link';
import { allLessons } from '@/data';

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
            <Link
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
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
