'use client';

import { ReactNode, createContext, useContext, ComponentProps } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export interface SelectOption {
    label: string;
    value: string;
}

interface FilterSelectContextType {
    options: SelectOption[];
}

const FilterSelectContext = createContext<FilterSelectContextType | null>(null);

const useFilterSelect = () => {
    const context = useContext(FilterSelectContext);
    if (!context) {
        throw new Error('Must be rendered within <FilterSelect.Root/>');
    }
    return context;
};

interface FilterSelectRootProps {
    options: SelectOption[];
    children: ReactNode;
    value?: string;
    onValueChange?: (value: string | null) => void;
    defaultValue?: string;
}

export function Root({
    options,
    children,
    value,
    onValueChange,
    defaultValue,
}: FilterSelectRootProps) {
    return (
        <FilterSelectContext.Provider value={{ options }}>
            <Select
                value={value}
                onValueChange={onValueChange}
                defaultValue={defaultValue}
            >
                {children}
            </Select>
        </FilterSelectContext.Provider>
    );
}

export function Trigger(props: ComponentProps<typeof SelectTrigger>) {
    return <SelectTrigger {...props} />;
}

export function Value(props: ComponentProps<typeof SelectValue>) {
    return <SelectValue {...props} />;
}

export function Content({ label }: { label?: string }) {
    const { options } = useFilterSelect();

    return (
        <SelectContent>
            <SelectGroup>
                {label && <SelectLabel>{label}</SelectLabel>}
                {options.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
    );
}
