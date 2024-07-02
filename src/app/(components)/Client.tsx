'use client';
import React, { useEffect, useState } from 'react';

const Client = () => {
  const [isShowScrollTopBtn, setIsShowScrollTopBtn] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const top = window.scrollY;
    if (top > 100) {
      setIsShowScrollTopBtn(true);
    } else {
      setIsShowScrollTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isShowScrollTopBtn && (
        <div
          className='fixed bottom-8 right-8 flex h-8 w-8 items-center justify-center bg-blue-200 text-white hover:cursor-pointer'
          onClick={scrollToTop}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M8 14a.75.75 0 0 1-.75-.75V4.56L4.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Client;
