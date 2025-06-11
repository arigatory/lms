import { CheckCheck } from 'lucide-react';

export default function CourseOverview({ course }) {
  console.log('CourseOverview', course);
  return (
    <>
      <h3 className="text-2xl">О курсе</h3>
      <p className="mt-4">
        {course?.description || 'Описание курса не предоставлено.'}
      </p>
      <div className="bg-gray-50 space-y-6 p-8 rounded-md mt-8">
        <h4 className="text-2xl">Что вы научитесь делать?</h4>
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6">
          {course?.learning &&
            course.learning.map((item, index) => (
              <li key={index} className="flex space-x-3">
                <CheckCheck className="flex-none relative top-1" />
                <div className='flex-1'>{item}</div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
