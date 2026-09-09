import { mockData } from '@/app/mock/mockDataTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { TableFilters } from '../TableFilters';

export default function MainTable() {
    return (
        <main className="flex-1 px-6 pb-6 overflow-hidden h-[calc(100vh-3rem)]">
            <Card className="flex flex-col h-full bg-background border shadow-sm overflow-hidden">
                <CardHeader className="shrink-0 space-y-4 border-b p-4">
                    <CardTitle className="text-xl font-bold tracking-tight">
                        Список заказов
                    </CardTitle>
                    <TableFilters />
                </CardHeader>

                <CardContent className="flex-1 p-0 overflow-auto">
                    <Table>
                        <TableHeader className="sticky top-0 bg-background z-10 border-b">
                            <TableRow>
                                <TableHead className="w-28 pl-4">
                                    № Заказа
                                </TableHead>
                                <TableHead>Статус</TableHead>
                                <TableHead>Способ оплаты</TableHead>
                                <TableHead className="text-right pr-4">
                                    Сумма
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="font-medium pl-4">
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>{row.method}</TableCell>
                                    <TableCell className="text-right pr-4">
                                        {row.amount}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    );
}
