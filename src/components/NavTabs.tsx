import { Home, Warehouse, Package } from 'lucide-react';

export function NavTabs() {
    return (
        <div className="flex items-center gap-1 bg-stone-200/60 p-1 rounded-full shadow-inner border border-black/5">
            <a
                href="#"
                className="flex items-center gap-2 px-3 py-1 bg-white text-foreground rounded-full shadow-sm font-medium transition-all"
            >
                <Home className="h-4 w-4" />
                <span>Главная</span>
            </a>

            <a
                href="#"
                className="flex items-center gap-2 px-3 py-1 text-muted-foreground hover:text-foreground transition-colors"
            >
                <Warehouse className="h-4 w-4" />
                <span>Склады</span>
            </a>

            <a
                href="#"
                className="flex items-center gap-2 px-3 py-1 text-muted-foreground hover:text-foreground transition-colors"
            >
                <Package className="h-4 w-4" />
                <span>Товары</span>
            </a>
        </div>
    );
}
