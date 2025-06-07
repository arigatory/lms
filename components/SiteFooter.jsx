import React from 'react';
import Logo from './Logo';

const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose md:text-left">
            С любовью от команды Clearn © 2025<br />
            Учимся вместе, создаём крутые штуки!
          </p>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="text-sm hover:underline">О нас</a>
          <a href="#" className="text-sm hover:underline">Правила</a>
          <a href="#" className="text-sm hover:underline">Контакты</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;