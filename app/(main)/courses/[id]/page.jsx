import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SectionTitle from '@/components/SectionTitle';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
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
  PlayCircle,
  SquarePlay,
  Tv,
  StickyNote,
  BookOpen,
  ArrowRight,
  X,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { formatPrice } from '@/lib/formatPrice';
import CourseDetailsIntro from './_components/CourseDetailsIntro';
import CourseDetails from './_components/CourseDetails';
import Testimonials from './_components/Testimonials';
import RelatedCourses from './_components/RelatedCourses';

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

const SingleCoursePage = () => {
  return (
    <>
      <CourseDetailsIntro />

      <CourseDetails />

      {/* Отзывы */}
      <Testimonials />

      {/* Похожие курсы */}
      <RelatedCourses courses={courses} />
    </>
  );
};
export default SingleCoursePage;
