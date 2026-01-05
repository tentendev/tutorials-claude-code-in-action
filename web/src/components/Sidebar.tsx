
'use client';

import { usePathname } from 'next/navigation';
import { allLessons } from '@/data';

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <a href="/" className="brand">
                Claude Code
                <span>實戰課程</span>
            </a>

            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a
                            href="/"
                            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                        >
                            <span className="chapter-num">00</span> 課程目錄
                        </a>
                    </li>
                    {allLessons.map((lesson) => (
                        <li key={lesson.slug} className="nav-item">
                            <a
                                href={`/course/${lesson.slug}`}
                                className={`nav-link ${pathname === `/course/${lesson.slug}` ? 'active' : ''}`}
                            >
                                <span className="chapter-num">{lesson.navTitle.split(' ')[0]}</span>
                                {lesson.navTitle.split(' ').slice(1).join(' ')}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
