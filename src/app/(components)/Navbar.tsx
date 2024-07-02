'use client';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const menus = [
  {
    title: 'Bộ sưu tập',
    id: 'collection',
  },
  {
    title: 'Sản phẩm',
    id: 'product',
  },
  {
    title: 'Dịch vụ',
    id: 'service',
  },
  {
    title: 'Quy trình',
    id: 'upgrade-process',
  },
  {
    title: 'Khách hàng',
    id: 'customer',
  },
  {
    title: 'Liên hệ',
    id: 'footer',
  },
];
const Navbar = () => {
  const [bottomToTop, setBottomToTop] = useState(false);
  const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, elementId: string) => {
    e.preventDefault();
    const element = document.getElementById(elementId);
    if (!element) return;
    window.scrollTo({
      top: element.offsetTop - 85,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const top = window.scrollY;
    if (top > 100) {
      setBottomToTop(true);
    } else {
      setBottomToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx(
        'fixed left-0 right-0 top-0 z-10 flex h-[85px] items-center justify-center bg-white',
        bottomToTop ? 'drop-shadow-sm' : '',
      )}
    >
      <div className='flex w-full flex-row items-center justify-around xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
        <a href='#'>
          <Image src='https://picsum.photos/100/50' width={100} height={50} alt=''></Image>
        </a>
        <div>
          <ul className='hidden flex-row gap-5 lg:flex'>
            {menus.map((menu, index) => (
              <li key={`menu-${index}`} className='flex flex-row items-center justify-center'>
                <a
                  href='#'
                  onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                    scrollToElement(e, menu.id);
                  }}
                  className='flex h-[49px] w-[110px] items-center justify-center text-nowrap rounded-3xl text-[17px] text-gray-100 hover:cursor-pointer hover:bg-blue-200 hover:font-semibold hover:text-white'
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
          <a href='#' className='lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
