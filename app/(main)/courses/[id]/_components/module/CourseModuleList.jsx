import { Video, NotepadText, FileQuestion } from 'lucide-react';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import CourseLessonList from './CourseLessonList';

export default function CourseModuleList() {
  return (
    <div>
      {' '}
      <AccordionItem className="border-none" value="item-1">
        <AccordionTrigger>Введение в React</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-x-5 items-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
            <span className="flex items-center gap-1.5">
              <Video className="w-4 h-4" />
              12 уроков
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
            <CourseLessonList />
          </div>
        </AccordionContent>
      </AccordionItem>
    </div>
  );
}
