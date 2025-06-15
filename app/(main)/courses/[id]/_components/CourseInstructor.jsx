import { Presentation, UsersRound, Star, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function CourseInstructor({ course }) {
  const instructor = course?.instructor;
  const fullName = `${instructor?.firstName || ''} ${
    instructor?.lastName || ''
  }`.trim();

  if (!course) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className="bg-gray-50 rounded-md p-8">
      <div className="md:flex md:gap-x-5 mb-8">
        <div className="h-[310px] w-[270px] max-w-full flex-none rounded mb-5 md:mb-0">
          <Image
            src={instructor?.profilePicture || '/images/default-profile.png'}
            width={200}
            height={200}
            alt="Преподаватель"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1">
          <div className="max-w-[300px]">
            <h4 className="text-[34px] font-bold leading-[51px]">
              {fullName || 'Автор курса'}
            </h4>
            <div className="text-gray-600 font-medium mb-6">
              {instructor?.designation || 'Ведущий разработчик'}
            </div>
            <ul className="list space-y-4">
              <li className="flex items-center space-x-3">
                <Presentation className="text-gray-600" />
                <div>10+ курсов</div>
              </li>
              <li className="flex space-x-3">
                <UsersRound className="text-gray-600" />
                <div>2000+ студентов</div>
              </li>
              <li className="flex space-x-3">
                <MessageSquare className="text-gray-600" />
                <div>1500+ отзывов</div>
              </li>
              <li className="flex space-x-3">
                <Star className="text-gray-600" />
                <div>Средний рейтинг 4.9</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-gray-600">
        {instructor?.bio ||
          'Автор курса не предоставил биографию. Но вы можете задать ему вопрос в чате.'}
      </p>
    </div>
  );
}
