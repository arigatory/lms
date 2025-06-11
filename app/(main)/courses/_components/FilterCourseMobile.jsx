'use client';
import React from 'react';
import {
  Filter,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

const PRICE_OPTIONS = [
  { label: 'Бесплатные', value: 'free' },
  { label: 'Платные', value: 'paid' },
];

const CATEGORY_OPTIONS = [
  {
    id: 1,
    label: 'Дизайн',
    value: 'design',
  },
  {
    id: 3,
    label: 'Разработка',
    value: 'development',
  },
  {
    id: 4,
    label: 'Маркетинг',
    value: 'marketing',
  },
  {
    id: 5,
    label: 'IT и ПО',
    value: 'it-software',
  },
  {
    id: 6,
    label: 'Саморазвитие',
    value: 'personal-development',
  },
  {
    id: 7,
    label: 'Бизнес',
    value: 'business',
  },
  {
    id: 8,
    label: 'Фотография',
    value: 'photography',
  },
  {
    id: 9,
    label: 'Музыка',
    value: 'music',
  },
];

export default function FilterCourseMobile() {
  const [filter, setFilter] = useState({
    categories: ['development'],
    price: ['free'],
    sort: '',
  });

  const applyArrayFilter = ({ type, value }) => {
    const isFilterApplied = filter[type].includes(value);

    if (isFilterApplied) {
      setFilter((prev) => ({
        ...prev,
        [type]: prev[type].filter((v) => v !== value),
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        [type]: [...prev[type], value],
      }));
    }
  };

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Filter className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left">Фильтры</SheetTitle>
            <Accordion defaultValue={['categories']} type="multiple">
              {/* Категории */}
              <AccordionItem value="categories">
                <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Категории</span>
                </AccordionTrigger>
                <AccordionContent className="pt-6 animate-none">
                  <ul className="space-y-4">
                    {CATEGORY_OPTIONS.map((option, optionIdx) => (
                      <li key={option.value} className="flex items-center">
                        <Checkbox
                          id={`category-${optionIdx}`}
                          onCheckedChange={() => {
                            applyArrayFilter({
                              type: 'categories',
                              value: option.value,
                            });
                          }}
                          checked={filter.categories.includes(option.value)}
                        />
                        <label
                          htmlFor={`category-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600 cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {/* Цена */}
              <AccordionItem value="price">
                <AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Цена</span>
                </AccordionTrigger>
                <AccordionContent className="pt-6 animate-none">
                  <ul className="space-y-4">
                    {PRICE_OPTIONS.map((option, optionIdx) => (
                      <li key={option.value} className="flex items-center">
                        <Checkbox
                          id={`price-${optionIdx}`}
                          onCheckedChange={() => {
                            applyArrayFilter({
                              type: 'price',
                              value: option.value,
                            });
                          }}
                          checked={filter.price.includes(option.value)}
                        />
                        <label
                          htmlFor={`price-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600 cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
