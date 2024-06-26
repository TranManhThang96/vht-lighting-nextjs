'use client';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from 'next/image';

const Brand = () => {
  return (
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
  );
};

export default Brand;
