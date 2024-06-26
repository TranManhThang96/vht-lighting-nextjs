import Image from 'next/image';
import Brand from './(components)/brand';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <nav className='flex h-[85px] items-center justify-center'>
        <div className='flex w-full flex-row items-center justify-around xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <a href='#'>
            <Image src='https://picsum.photos/100/50' width={100} height={50}></Image>
          </a>
          <div>
            <ul className='hidden flex-row gap-5 lg:flex'>
              <li className='flex h-[49px] w-[110px] flex-row items-center justify-center rounded-3xl text-gray-100 hover:cursor-pointer hover:bg-blue-200 hover:font-semibold hover:text-white'>
                <a href='#' className='text-nowrap text-[17px]'>
                  Sản phẩm
                </a>
              </li>
              <li className='flex h-[49px] w-[110px] flex-row items-center justify-center rounded-3xl text-gray-100 hover:cursor-pointer hover:bg-blue-200 hover:font-semibold hover:text-white'>
                <a href='#' className='text-nowrap text-[17px]'>
                  Dịch vụ
                </a>
              </li>
              <li className='flex h-[49px] w-[110px] flex-row items-center justify-center rounded-3xl text-gray-100 hover:cursor-pointer hover:bg-blue-200 hover:font-semibold hover:text-white'>
                <a href='#' className='text-nowrap text-[17px]'>
                  Quy trình
                </a>
              </li>
              <li className='flex h-[49px] w-[110px] flex-row items-center justify-center rounded-3xl text-gray-100 hover:cursor-pointer hover:bg-blue-200 hover:font-semibold hover:text-white'>
                <a href='#' className='text-nowrap text-[17px]'>
                  Khách hàng
                </a>
              </li>
              <li className='flex h-[49px] w-[110px] flex-row items-center justify-center rounded-3xl text-gray-100 hover:cursor-pointer hover:bg-blue-200 hover:font-semibold hover:text-white'>
                <a href='#' className='text-nowrap text-[17px]'>
                  Liên hệ
                </a>
              </li>
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

      <section className='flex min-h-[1056px] flex-col justify-around'>
        <div className='mx-auto w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <div className='flex justify-center gap-[80px]'>
            <div>
              <h1 className='space-y-7 text-[54px] font-semibold leading-[62px] text-gray-100'>
                VHT <span className='text-blue-200'>Lighting</span>
              </h1>
              <h3 className='text-[22px] font-semibold leading-9 text-gray-50'>Kẻ huỷ diệt màn đêm</h3>
              <h3 className='text-[22px] font-semibold leading-9 text-gray-50'>Thách thức mọi cung đường</h3>
              <button className='mt-10 h-[60px] w-[150px] rounded-full bg-blue-200 text-white hover:cursor-pointer'>
                Khám phá
              </button>
            </div>
            <div>
              <Image src='https://picsum.photos/300/300' width={300} height={300}></Image>
            </div>
          </div>

          <div className='mt-[94px]'>
            <p className='text-center text-[17px] text-gray-50'>Trusted by over 2K+ clients across the world</p>
            <div className='mt-10'>
              <Brand />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
