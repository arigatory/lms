import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  CheckCheck,
  Presentation,
  UsersRound,
  Star,
  MessageSquare,
  BookCheck,
  Clock10,
  Radio,
  Video,
  NotepadText,
  FileQuestion,
  Tv,
  StickyNote,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
              <h3 className="text-2xl">О курсе</h3>
              <p className="mt-4">
                Этот курс поможет вам быстро и глубоко освоить React и Next.js.
                Вы не просто изучите теорию, а сразу примените знания на
                практике, создавая реальные проекты. Мы научим вас не только
                основам, но и продвинутым техникам, которые используют
                профессионалы.
                <br />
                <br />В курсе три основных раздела: основы React, углубленное
                изучение Next.js и создание полноценного интернет-магазина.
                Каждый раздел содержит практические задания и реальные примеры
                из работы разработчиков.
              </p>
              <div className="bg-gray-50 space-y-6 p-8 rounded-md mt-8">
                <h4 className="text-2xl">Что вы научитесь делать?</h4>
                <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                  <li className="flex space-x-3">
                    <CheckCheck className="flex-none relative top-1" />
                    <div>Создавать современные веб-приложения на React</div>
                  </li>
                  <li className="flex space-x-3">
                    <CheckCheck className="flex-none relative top-1" />
                    <div>Работать с серверным рендерингом в Next.js</div>
                  </li>
                  <li className="flex space-x-3">
                    <CheckCheck className="flex-none relative top-1" />
                    <div>Оптимизировать производительность приложений</div>
                  </li>
                  <li className="flex space-x-3">
                    <CheckCheck className="flex-none relative top-1" />
                    <div>Разрабатывать полноценный интернет-магазин</div>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="curriculum">
              <div className="flex gap-x-5 items-center justify-center flex-wrap mt-4 mb-6 text-gray-600 text-sm">
                <span className="flex items-center gap-1.5">
                  <BookCheck className="w-4 h-4" />
                  12 модулей
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
                collapsible
                className="w-full"
              >
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
                      <button
                        type="button"
                        className={cn(
                          'flex items-center gap-x-2 text-slate-500 text-sm font-[500] transition-all hover:text-slate-600 w-full'
                        )}
                      >
                        <Tv size={16} className="text-slate-500" />
                        Что такое React?
                      </button>
                      <button
                        type="button"
                        className={cn(
                          'flex items-center gap-x-2 text-slate-500 text-sm font-[500] transition-all hover:text-slate-600 w-full'
                        )}
                      >
                        <Tv size={16} className="text-slate-500" />
                        Основы React
                      </button>
                      <button
                        type="button"
                        className={cn(
                          'flex items-center gap-x-2 text-slate-500 text-sm font-[500] transition-all hover:text-slate-600 w-full'
                        )}
                      >
                        <Tv size={16} className="text-slate-500" />
                        Создаем первое приложение
                      </button>
                      <button
                        type="button"
                        className={cn(
                          'flex items-center gap-x-2 text-slate-500 text-sm font-[500] transition-all hover:text-slate-600 w-full'
                        )}
                      >
                        <StickyNote size={16} className="text-slate-500" />
                        Шпаргалка по основам
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem className="border-none" value="item-2">
                  <AccordionTrigger>Осваиваем Next.js</AccordionTrigger>
                  <AccordionContent>
                    {/* аналогичная структура для других разделов */}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            <TabsContent value="instructor">
              <div className="bg-gray-50 rounded-md p-8">
                <div className="md:flex md:gap-x-5 mb-8">
                  <div className="h-[310px] w-[270px] max-w-full flex-none rounded mb-5 md:mb-0">
                    <img
                      src="https://avatars.githubusercontent.com/u/47516621?v=4"
                      alt="Преподаватель"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="max-w-[300px]">
                      <h4 className="text-[34px] font-bold leading-[51px]">
                        Команда Clearn
                      </h4>
                      <div className="text-gray-600 font-medium mb-6">
                        Профессиональные разработчики
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
                  Наша команда состоит из практикующих разработчиков, которые
                  создают сложные веб-приложения каждый день. Мы знаем, какие
                  знания действительно нужны в работе, и делимся только
                  актуальной и полезной информацией. Наши курсы — это
                  концентрированный опыт, который поможет вам избежать
                  распространенных ошибок и ускорить профессиональный рост.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
