import { BookCheck, Clock10, Radio } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import CourseModuleList from './module/CourseModuleList';
import { russianCase } from '@/lib/russianCase';

export default function CourseCurriculum({ course }) {
  return (
    <>
      <div className="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
        <span className="flex items-center gap-1.5">
          <BookCheck className="w-4 h-4" />
          {course.modules.length} {russianCase(course.modules.length, ['модуль', 'модуля', 'модулей'])}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock10 className="w-4 h-4" />
          50+ часов
        </span>
        <span className="flex items-center gap-1.5">
          <Radio className="w-4 h-4" />4 живых занятия
        </span>
      </div>

      <Accordion
        defaultValue={['item-1']}
        type="multiple"
        collapsible="true"
        className="w-full"
      >
        <CourseModuleList />
      </Accordion>
    </>
  );
}
