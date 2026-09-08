import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Calendar, Printer, MapPin } from 'lucide-react';

export function TableFilters() {
    return (
        <div className="bg-background border rounded-lg p-3 space-y-2.5 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
                {/* Даты */}
                <div className="flex items-center gap-1.5 border rounded-md px-2.5 py-1 bg-background text-sm h-9">
                    <span>08.09.2026</span>
                    <span className="text-muted-foreground">→</span>
                    <span>08.09.2026</span>
                    <Calendar className="h-4 w-4 ml-1 text-muted-foreground" />
                </div>

                <Input
                    placeholder="Комментарий/код Л..."
                    className="w-48 h-9"
                />

                <Select>
                    <SelectTrigger className="w-48 h-9">
                        <SelectValue placeholder="Тип операции" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Все операции</SelectItem>
                        <SelectItem value="move">Перемещение</SelectItem>
                    </SelectContent>
                </Select>

                <Button
                    variant="outline"
                    size="sm"
                    className="h-9 gap-1.5 text-muted-foreground"
                >
                    <Printer className="h-4 w-4" />
                    <span>Печать</span>
                </Button>

                <Select>
                    <SelectTrigger className="w-52 h-9">
                        <SelectValue placeholder="Фильтр по исполнителям" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="admin">admin admin</SelectItem>
                    </SelectContent>
                </Select>

                <Button
                    variant="outline"
                    size="sm"
                    className="h-9 gap-1.5 text-muted-foreground"
                >
                    <MapPin className="h-4 w-4" />
                    <span>Выбрать локацию</span>
                </Button>

                <div className="flex items-center gap-2 ml-auto text-xs font-medium text-muted-foreground">
                    <span>Группировать по родителю</span>
                    <Switch />
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <Input placeholder="Товар" className="w-48 h-9" />
                <Input placeholder="Партия" className="w-32 h-9 bg-muted/20" />

                <Select>
                    <SelectTrigger className="w-44 h-9">
                        <SelectValue placeholder="Статус от" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="active">Основной</SelectItem>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-44 h-9">
                        <SelectValue placeholder="Статус до" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="blocked">Заблокирован</SelectItem>
                    </SelectContent>
                </Select>

                <Input placeholder="Код задачи" className="w-32 h-9" />
                <Input placeholder="Документ-основа..." className="w-44 h-9" />
            </div>
        </div>
    );
}
