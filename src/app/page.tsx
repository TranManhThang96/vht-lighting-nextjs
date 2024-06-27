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

      <section className='flex min-h-[900px] flex-col justify-around bg-banner bg-[length:100%_134px] bg-left-bottom bg-no-repeat'>
        <div className='mx-auto w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <div className='flex justify-center gap-[120px]'>
            <div>
              <h1 className='space-y-7 text-[54px] font-semibold leading-[62px] text-gray-100'>
                VHT <span className='text-blue-200'>Lighting</span>
              </h1>
              <p className='mt-4 text-[22px] leading-9 text-gray-50'>
                Luôn nỗ lực để mang những sản phẩm,
                <br /> dịch vụ tốt nhất đến với khách hàng
              </p>

              <button className='mt-10 h-[60px] w-[150px] rounded-full bg-blue-200 text-white hover:cursor-pointer'>
                Khám phá
              </button>
            </div>
            <div>
              <div className='flex flex-row items-center gap-10'>
                <div>
                  <Image src='/images/s600.png' width={200} height={150}></Image>
                  <h3 className='text-[22px] font-semibold leading-9 text-blue-200'>Kẻ huỷ diệt màn đêm</h3>
                </div>
                <div>
                  <h3 className='text-[22px] font-semibold leading-9 text-blue-200'>Thách thức mọi cung đường</h3>
                  <Image src='/images/f150.png' width={200} height={200}></Image>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-[94px]'>
            <p className='text-center text-[17px] text-gray-50'>Sản phẩm đa dạng các thương hiệu</p>
            <div className='mb-[134px] mt-10'>
              <Brand />
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-[700px] bg-gradient-to-b from-blue-100 to-white'>
        <div className='mx-auto w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <div className=''></div>
          <div className=''></div>
        </div>
      </section>
    </main>
  );
}
