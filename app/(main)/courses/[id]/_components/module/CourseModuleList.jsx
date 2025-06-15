import { Video, NotepadText, FileQuestion } from 'lucide-react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import CourseLessonList from './CourseLessonList';
import { russianCase } from '@/lib/russianCase';

export default function CourseModuleList({ module }) {
  return (
    <div>
      {' '}
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger>{module.title}</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
            <span className="flex items-center gap-1.5">
              <Video className="w-4 h-4" />
              {(module?.duration / 60).toPrecision(2) || 0} {russianCase(module?.duration / 60, ['час', 'часа', 'часов'])}
            </span>
            <span className="flex items-center gap-1.5">
              <NotepadText className="w-4 h-4" />
              10 материалов
            </span>
            <span className="flex items-center gap-1.5">
              <FileQuestion className="w-4 h-4" />
              10 тестов
            </span>
          </div>

          <div className="space-y-3">
            {module?.lessonIds && module?.lessonIds.map(lessonId => (
              <CourseLessonList key={lessonId} lessonId={lessonId} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
