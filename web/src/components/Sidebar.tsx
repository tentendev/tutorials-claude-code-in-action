'use client';

import { useState, Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { allLessons } from '@/data';

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
            <div className="sidebar-header">
                <a href="/" className="brand">
                    Claude Code
                    <span>實戰課程</span>
                </a>
                <button
                    className="menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? '關閉選單' : '開啟選單'}
                    aria-expanded={isOpen}
                >
                    <span className="menu-icon">
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                        <span className="menu-line"></span>
                    </span>
                </button>
            </div>

            <nav className="sidebar-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a
                            href="/"
                            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                        >
                            <span className="chapter-num">00</span> 課程目錄
                        </a>
                    </li>
                    {allLessons.map((lesson, index) => (
                        <Fragment key={lesson.slug}>
                            {index === 0 && (
                                <li key="part1-header" className="nav-section-header">Part 1：基礎篇</li>
                            )}
                            {index === 10 && (
                                <li key="part2-header" className="nav-section-header">Part 2：進階篇</li>
                            )}
                            {index === 21 && (
                                <li key="part3-header" className="nav-section-header">Part 3：高級與企業篇</li>
                            )}
                            <li key={lesson.slug} className="nav-item">
                                <a
                                    href={`/course/${lesson.slug}`}
                                    className={`nav-link ${pathname === `/course/${lesson.slug}` ? 'active' : ''}`}
                                >
                                    <span className="chapter-num">{lesson.navTitle.split(' ')[0]}</span>
                                    {lesson.navTitle.split(' ').slice(1).join(' ')}
                                </a>
                            </li>
                        </Fragment>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
