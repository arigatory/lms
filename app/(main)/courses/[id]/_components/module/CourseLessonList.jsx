import { cn } from '@/lib/utils';
import {
  Tv,
} from 'lucide-react';


export default function CourseLessonList() {
  return (
    <div>
      <button
        type="button"
        className={cn(
          'flex items-center gap-x-2 text-slate-500 text-sm font-[500] transition-all hover:text-slate-600 w-full'
        )}
      >
        <Tv size={16} className="text-slate-500" />
        Что такое React?
      </button>
    </div>
  );
}
