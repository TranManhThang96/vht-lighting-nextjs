'use client';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className='flex min-h-[900px] flex-col justify-around'>
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
            <Splide
              options={{
                rewind: true,
                type: 'loop',
                drag: 'free',
                gap: '1rem',
                autoplay: true,
                perPage: 8,
                perMove: 1,
                interval: 5000,
                pagination: false,
                arrows: false,
              }}
              hasTrack={false}
            >
              <SplideTrack>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>

                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
                <SplideSlide>
                  <Image src='https://picsum.photos/160/30' width={160} height={30}></Image>
                </SplideSlide>
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
