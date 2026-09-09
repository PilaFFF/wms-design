import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import * as FilterSelect from './FilterSelect';
import type { SelectOption } from './FilterSelect';
import { Calendar, Printer, MapPin } from 'lucide-react';

const OPERATION_TYPES: SelectOption[] = [
    { label: 'Все операции', value: 'all' },
    { label: 'Перемещение', value: 'move' },
];

const EXECUTORS: SelectOption[] = [{ label: 'admin admin', value: 'admin' }];

const STATUS_FROM: SelectOption[] = [{ label: 'Основной', value: 'active' }];

const STATUS_TO: SelectOption[] = [{ label: 'Заблокирован', value: 'blocked' }];

export function TableFilters() {
    return (
        <div className="bg-background border rounded-lg p-3 space-y-2.5 shadow-sm">
            {/* Первая строка */}
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

                {/* Тип операции */}
                <FilterSelect.Root options={OPERATION_TYPES}>
                    <FilterSelect.Trigger className="w-48 h-9">
                        <FilterSelect.Value placeholder="Тип операции" />
                    </FilterSelect.Trigger>
                    <FilterSelect.Content />
                </FilterSelect.Root>

                <Button
                    variant="outline"
                    size="sm"
                    className="h-9 gap-1.5 text-muted-foreground"
                >
                    <Printer className="h-4 w-4" />
                    <span>Печать</span>
                </Button>

                {/* Фильтр по исполнителям */}
                <FilterSelect.Root options={EXECUTORS}>
                    <FilterSelect.Trigger className="w-52 h-9">
                        <FilterSelect.Value placeholder="Фильтр по исполнителям" />
                    </FilterSelect.Trigger>
                    <FilterSelect.Content />
                </FilterSelect.Root>

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

            {/* Вторая строка */}
            <div className="flex flex-wrap items-center gap-2">
                <Input placeholder="Товар" className="w-48 h-9" />
                <Input placeholder="Партия" className="w-32 h-9 bg-muted/20" />

                {/* Статус от */}
                <FilterSelect.Root options={STATUS_FROM}>
                    <FilterSelect.Trigger className="w-44 h-9">
                        <FilterSelect.Value placeholder="Статус от" />
                    </FilterSelect.Trigger>
                    <FilterSelect.Content />
                </FilterSelect.Root>

                {/* Статус до */}
                <FilterSelect.Root options={STATUS_TO}>
                    <FilterSelect.Trigger className="w-44 h-9">
                        <FilterSelect.Value placeholder="Статус до" />
                    </FilterSelect.Trigger>
                    <FilterSelect.Content />
                </FilterSelect.Root>

                <Input placeholder="Код задачи" className="w-32 h-9" />
                <Input placeholder="Документ-основа..." className="w-44 h-9" />
            </div>
        </div>
    );
}
