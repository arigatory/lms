import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { formatPrice } from '@/lib/formatPrice';

const courses = [
  {
    id: 1,
    title: 'Дизайн',
    thumbnail: '/assets/images/categories/design.jpg',
  },
  {
    id: 3,
    title: 'Разработка',
    thumbnail: '/assets/images/categories/development.jpg',
  },
  {
    id: 4,
    title: 'Маркетинг',
    thumbnail: '/assets/images/categories/marketing.jpg',
  },
  {
    id: 5,
    title: 'IT и ПО',
    thumbnail: '/assets/images/categories/it_software.jpg',
  },
  {
    id: 6,
    title: 'Саморазвитие',
    thumbnail: '/assets/images/categories/personal_development.jpg',
  },
  {
    id: 7,
    title: 'Бизнес',
    thumbnail: '/assets/images/categories/business.jpg',
  },
  {
    id: 8,
    title: 'Фотография',
    thumbnail: '/assets/images/categories/photography.jpg',
  },
  {
    id: 9,
    title: 'Музыка',
    thumbnail: '/assets/images/categories/music.jpg',
  },
];

export default function RelatedCourses() {
  return (
    <section className="">
      <div className="container">
        <SectionTitle className="mb-6">Рекомендуем также</SectionTitle>
        <Carousel
          opts={{ align: 'start' }}
          className="max-2xl:w-[90%] w-full mx-auto"
        >
          <CarouselPrevious />
          <CarouselNext />
          <CarouselContent>
            {courses.slice(0, 3).map((course) => (
              <CarouselItem
                key={course.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Link href={`/courses/${course.id}`}>
                  <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
                    <div className="relative w-full aspect-video rounded-md overflow-hidden">
                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <div className="flex flex-col pt-2">
                      <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                        {course.title === 'Разработка'
                          ? 'Полный курс JavaScript'
                          : course.title}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {course.title}
                      </p>
                      <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                        <div className="flex items-center gap-x-1 text-slate-500">
                          <BookOpen className="w-4" />
                          <span>4 модуля</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-md md:text-sm font-medium text-slate-700">
                          {formatPrice(49)}
                        </p>
                        <Button
                          variant="ghost"
                          className="text-xs text-sky-700 h-7 gap-1"
                        >
                          Записаться
                          <ArrowRight className="w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
