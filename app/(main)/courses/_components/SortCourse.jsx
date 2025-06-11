
'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';


const SORT_OPTIONS = [
  { label: 'Цена: от дешевых', value: 'price-asc' },
  { label: 'Цена: от дорогих', value: 'price-desc' },
];


export default function SortCourse() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-none !border-b focus:ring-0 focus:ring-offset-0 overflow-hidden">
        <SelectValue placeholder="Сортировка" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Варианты сортировки</SelectLabel>
          {SORT_OPTIONS.map((option) => (
            <SelectItem
              className="cursor-pointer"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
