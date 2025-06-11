import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseOverview from './CourseOverview';
import CourseCurriculum from './CourseCurriculum';
import CourseInstructor from './CourseInstructor';

export default function CourseDetails() {
  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className="container">
        <span className="bg-green-500 px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
          Разработка
        </span>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
          React Ускоритель
        </h3>
        <p className="mt-3 text-gray-600 text-sm">
          Полное руководство по React и Next.js
        </p>

        <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
          <div className="flex items-center gap-2">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src="https://avatars.githubusercontent.com/u/47516621?v=4"
              alt="Преподаватель"
            />
            <p className="font-bold">Курс от Clearn</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-success font-semibold">Обновлено: </span>
            <span>22 февраля 2024</span>
          </div>
        </div>

        {/* Вкладки */}
        <div className="my-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="curriculum">Программа</TabsTrigger>
              <TabsTrigger value="instructor">Автор</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <CourseOverview />
            </TabsContent>

            <TabsContent value="curriculum">
              <CourseCurriculum />
            </TabsContent>

            <TabsContent value="instructor">
              <CourseInstructor />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
