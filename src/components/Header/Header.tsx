// src/components/Header.tsx
import { BarChart3 } from 'lucide-react';
import { NavTabs } from '../NavTabs';

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-10 h-12 shrink-0">
            <div className="flex items-center gap-6">
                <div className="flex flex-col bg-primary text-white font-bold text-lg px-2.5 py-1 rounded-md tracking-wide">
                    Alphapet
                </div>

                <nav className="flex items-center gap-4 text-sm font-medium">
                    <NavTabs />

                    <a
                        href="#"
                        className="flex items-center gap-2 px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <BarChart3 className="h-4 w-4" />
                        <span>Отчеты</span>
                    </a>
                </nav>
            </div>
        </header>
    );
}
