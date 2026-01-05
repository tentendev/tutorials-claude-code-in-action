
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { allLessons } from '@/data';

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <Link href="/" className="brand">
                Claude Code
                <span>實戰課程</span>
            </Link>

            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link
                            href="/"
                            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                        >
                            <span className="chapter-num">00</span> 課程目錄
                        </Link>
                    </li>
                    {allLessons.map((lesson) => (
                        <li key={lesson.slug} className="nav-item">
                            <Link
                                href={`/course/${lesson.slug}`}
                                className={`nav-link ${pathname === `/course/${lesson.slug}` ? 'active' : ''}`}
                            >
                                <span className="chapter-num">{lesson.navTitle.split(' ')[0]}</span>
                                {lesson.navTitle.split(' ').slice(1).join(' ')}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
