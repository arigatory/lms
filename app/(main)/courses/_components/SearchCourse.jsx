'use client';

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

export default function SearchCourse() {
  return (
    <div className="relative h-10 max-lg:w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 h-4 w-4" />
      <Input
        type="text"
        placeholder="Найти курс..."
        className="pl-8 pr-3 py-2 text-sm"
      />
    </div>
  );
}
