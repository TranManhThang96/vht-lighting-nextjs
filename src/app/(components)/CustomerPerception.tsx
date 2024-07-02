import Image from 'next/image';
import React from 'react';

const CustomerPerception = () => {
  return (
    <section
      id='customer'
      className="relative min-h-[900px] bg-gradient-to-b from-[#f7f7f7] to-blue-100 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[134px] after:bg-decorate2 after:bg-[length:100%_134px] after:bg-left-top after:bg-no-repeat after:content-['']"
    >
      <div className='mx-auto w-full py-10 xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
        <div className='flex w-full justify-between'>
          <div className='basis-1/3'>
            <h3 className='text-base font-semibold uppercase text-blue-200'>Company Facts</h3>
            <h2 className='mb-6 mt-4 text-[42px] font-semibold leading-[50px] text-gray-100'>
              We are proud of
              <br />
              our design team
            </h2>
            <p className='text-base leading-[29px] text-gray-50'>
              Just sit back and relax while we take care
              <br />
              of your business needs for you.
            </p>
          </div>

          <div className='flex grow basis-2/3 justify-around'>
            <div className='flex flex-col items-center'>
              <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-50 text-blue-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                  />
                </svg>
              </div>
              <span className='mb-4 mt-5 text-4xl font-semibold text-gray-100'>1000+</span>
              <span className='text-base text-gray-50'>Completed Projects</span>
            </div>

            <div className='flex flex-col items-center'>
              <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-50 text-blue-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                  />
                </svg>
              </div>
              <span className='mb-4 mt-5 text-4xl font-semibold text-gray-100'>1000+</span>
              <span className='text-base text-gray-50'>Completed Projects</span>
            </div>

            <div className='flex flex-col items-center'>
              <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-50 text-blue-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
                  />
                </svg>
              </div>
              <span className='mb-4 mt-5 text-4xl font-semibold text-gray-100'>1000+</span>
              <span className='text-base text-gray-50'>Completed Projects</span>
            </div>
          </div>
        </div>

        <div className='mt-16 flex gap-4'>
          <div className='h-[auto] w-[300px] rounded-lg bg-white p-5 drop-shadow-2xl'>
            <div className='flex space-x-4'>
              <Image
                src='https://picsum.photos/100/100'
                width={100}
                height={100}
                className='h-[100px] w-[100px] rounded-full'
                alt=''
              ></Image>
              <div className='flex flex-col'>
                <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                <span className='text-base text-gray-50'>Financial Analyst</span>
              </div>
            </div>
            <p className='mt-4 text-base text-gray-50'>
              Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu
              sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum
              ac laoreet vitae
            </p>
          </div>

          <div className='h-[auto] w-[300px] rounded-lg bg-white p-5 drop-shadow-2xl'>
            <div className='flex space-x-4'>
              <Image
                src='https://picsum.photos/100/100'
                width={100}
                height={100}
                className='h-[100px] w-[100px] rounded-full'
                alt=''
              ></Image>
              <div className='flex flex-col'>
                <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                <span className='text-base text-gray-50'>Financial Analyst</span>
              </div>
            </div>
            <p className='mt-4 text-base text-gray-50'>
              Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu
              sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum
              ac laoreet vitae
            </p>
          </div>

          <div className='h-[auto] w-[300px] rounded-lg bg-white p-5 drop-shadow-2xl'>
            <div className='flex space-x-4'>
              <Image
                src='https://picsum.photos/100/100'
                width={100}
                height={100}
                className='h-[100px] w-[100px] rounded-full'
                alt=''
              ></Image>
              <div className='flex flex-col'>
                <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                <span className='text-base text-gray-50'>Financial Analyst</span>
              </div>
            </div>
            <p className='mt-4 text-base text-gray-50'>
              Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu
              sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum
              ac laoreet vitae
            </p>
          </div>

          <div className='h-[auto] w-[300px] rounded-lg bg-white p-5 drop-shadow-2xl'>
            <div className='flex space-x-4'>
              <Image
                src='https://picsum.photos/100/100'
                width={100}
                height={100}
                className='h-[100px] w-[100px] rounded-full'
                alt=''
              ></Image>
              <div className='flex flex-col'>
                <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                <span className='text-base text-gray-50'>Financial Analyst</span>
              </div>
            </div>
            <p className='mt-4 text-base text-gray-50'>
              Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu
              sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum
              ac laoreet vitae
            </p>
          </div>

          <div className='h-[auto] w-[300px] rounded-lg bg-white p-5 drop-shadow-2xl'>
            <div className='flex space-x-4'>
              <Image
                src='https://picsum.photos/100/100'
                width={100}
                height={100}
                className='h-[100px] w-[100px] rounded-full'
                alt=''
              ></Image>
              <div className='flex flex-col'>
                <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                <span className='text-base text-gray-50'>Financial Analyst</span>
              </div>
            </div>
            <p className='mt-4 text-base text-gray-50'>
              Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu
              sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum
              ac laoreet vitae
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerPerception;
