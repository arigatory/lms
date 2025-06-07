import Image from 'next/image';
import React from 'react';

const Element = () => {
  return (
    <div className="bg-darkBlue min-h-screen px-0 py-12">
      {/* Первый блок */}
      <div className="w-full bg-fuchsia-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10">
        <div className="md:w-1/2 text-center md:text-left pt-10 pb-10">
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            Ускоренный старт
          </h3>
          <h2 className="text-gray-800 font-bold text-5xl mb-4">
            Кодим, а не зубрим!
          </h2>
          <p className="text-gray-600">
            Освой программирование с нуля до про. У нас только практика —
            делаешь реальные проекты и чувствуешь себя настоящим разработчиком
            уже с первых уроков.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/assets/images/two.png"
            alt="Обучение через практику"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Второй блок */}
      <div className="w-full bg-blue-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/assets/images/one.png"
            alt="Применяем знания"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-green-600 font-semibold text-lg mb-2">
            По шагам, без воды
          </h3>
          <h2 className="text-gray-800 font-bold text-5xl mb-4">
            Теория — в мусорку, <br /> только практика!
          </h2>
          <p className="text-gray-600">
            Сразу применяешь знания в реальных проектах. Всё, что нужно чтобы
            прокачать скиллы и выйти на новый уровень.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Element;
