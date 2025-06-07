import MainNav from '@/components/MainNav';
import SiteFooter from '@/components/SiteFooter';
import React from 'react';

const navLinks = [
  {
    title: 'Что внутри',
    href: '/features',
  },
  {
    title: 'Цены',
    href: '/pricing',
  },
  {
    title: 'Статьи',
    href: '/blog',
  },
  {
    title: 'База знаний',
    href: '/docs',
  },
];

const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b">
        <div className="container flex h-20 items-center justify-between py-6">
          <MainNav items={navLinks} />
        </div>
      </header>

      <main> {children} </main>
      <SiteFooter />
    </div>
  );
};

export default MainLayout;
