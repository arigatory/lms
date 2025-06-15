import { cn } from '@/lib/utils';
import { getLesson } from '@/queries/lessons';
import { Tv } from 'lucide-react';

export default async function CourseLessonList({ lessonId }) {
  const lesson = await getLesson(lessonId);
  console.log('lesson', lesson);

  return (
    <div>
      <button
        type="button"
        className={cn(
          'flex items-center gap-x-2 text-slate-500 text-sm font-[500] transition-all hover:text-slate-600 w-full'
        )}
      >
        <Tv size={16} className="text-slate-500" />
        {lesson?.title || 'Загрузка...'}
      </button>
    </div>
  );
}
