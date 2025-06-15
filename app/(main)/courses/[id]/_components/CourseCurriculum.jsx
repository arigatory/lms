import { BookCheck, Clock10, Radio } from 'lucide-react';
import { Accordion } from '@/components/ui/accordion';
import CourseModuleList from './module/CourseModuleList';
import { russianCase } from '@/lib/russianCase';

export default function CourseCurriculum({ course }) {
  const totalDuration =
    (
      course.modules.reduce((total, module) => {
        return total + (module.duration || 0);
      }, 0) / 60
    ).toPrecision(2) || 0;
  return (
    <>
      <div className="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
        <span className="flex items-center gap-1.5">
          <BookCheck className="w-4 h-4" />
          {course.modules.length}{' '}
          {russianCase(course.modules.length, ['модуль', 'модуля', 'модулей'])}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock10 className="w-4 h-4" />
          {totalDuration}+{' '}
          {russianCase(totalDuration, ['час', 'часа', 'часов'])}
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
        {course?.modules &&
          course.modules.map((module, index) => (
            <CourseModuleList key={module.id || index} module={module} />
          ))}
      </Accordion>
    </>
  );
}
