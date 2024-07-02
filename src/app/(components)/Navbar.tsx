import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const menus = [
    {
      title: 'Bộ sưu tập',
      link: '#',
    },
    {
      title: 'Sản phẩm',
      link: '#',
    },
    {
      title: 'Dịch vụ',
      link: '#',
    },
    {
      title: 'Quy trình',
      link: '#',
    },
    {
      title: 'Khách hàng',
      link: '#',
    },
    {
      title: 'Liên hệ',
      link: '#',
    },
  ];
  return (
    <nav className='flex h-[85px] items-center justify-center'>
      <div className='flex w-full flex-row items-center justify-around xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
        <a href='#'>
          <Image src='https://picsum.photos/100/50' width={100} height={50} alt=''></Image>
        </a>
        <div>
          <ul className='hidden flex-row gap-5 lg:flex'>
            {menus.map((menu, index) => (
              <li
                key={`menu-${index}`}
                className='flex h-[49px] w-[110px] flex-row items-center justify-center rounded-3xl text-gray-100 hover:cursor-pointer hover:bg-blue-200 hover:font-semibold hover:text-white'
              >
                <a href={menu.link} className='text-nowrap text-[17px]'>
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
