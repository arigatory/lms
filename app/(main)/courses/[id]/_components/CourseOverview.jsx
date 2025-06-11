import { CheckCheck } from 'lucide-react';

export default function CourseOverview() {
  return (
    <>
      <h3 className="text-2xl">О курсе</h3>
      <p className="mt-4">
        Этот курс поможет вам быстро и глубоко освоить React и Next.js. Вы не
        просто изучите теорию, а сразу примените знания на практике, создавая
        реальные проекты. Мы научим вас не только основам, но и продвинутым
        техникам, которые используют профессионалы.
        <br />
        <br />В курсе три основных раздела: основы React, углубленное изучение
        Next.js и создание полноценного интернет-магазина. Каждый раздел
        содержит практические задания и реальные примеры из работы
        разработчиков.
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
    </>
  );
}
