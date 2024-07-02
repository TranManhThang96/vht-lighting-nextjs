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
              <Brand />
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[700px] bg-gradient-to-b from-blue-100 to-[#f7f7f7] before:absolute before:left-0 before:right-0 before:top-[-134px] before:h-[134px] before:bg-decorate before:bg-[length:100%_134px] before:bg-left-top before:bg-no-repeat before:content-['']">
        <div className='mx-auto flex w-full gap-10 xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <div className=''>
            <Image src='https://picsum.photos/720/550' width={720} height={550}></Image>
          </div>
          <div className=''>
            <h3 className='text-[15px] font-semibold uppercase leading-5 text-blue-200'>
              Tại sao bạn nên lựa chọn VHT Lighting?
            </h3>
            <h2 className='mt-4 text-[42px] font-semibold leading-[50px] text-gray-100'>
              VHT Lighting cung cấp giải pháp
              <br /> ánh sáng toàn diện nhất cho bạn.
            </h2>
            <ul className='mt-10'>
              <li className='flex items-center gap-1 text-[17px] leading-[29px] text-gray-50'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-4'>
                  <path
                    fillRule='evenodd'
                    d='M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z'
                    clipRule='evenodd'
                  />
                </svg>
                Nâng cấp đèn sáng gấp 5 &gt 10 lần đèn zin
              </li>
              <li className='flex items-center gap-1 text-[17px] leading-[29px] text-gray-50'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-4'>
                  <path
                    fillRule='evenodd'
                    d='M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z'
                    clipRule='evenodd'
                  />
                </svg>
                Fix lỗi bi cầu các đèn đã lắp đặt
              </li>
              <li className='flex items-center gap-1 text-[17px] leading-[29px] text-gray-50'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-4'>
                  <path
                    fillRule='evenodd'
                    d='M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z'
                    clipRule='evenodd'
                  />
                </svg>
                Phân phối sỉ lẻ bi cầu, led audi, mạch hiệu ứng, phụ kiện bi cầu
              </li>
              <li className='flex items-center gap-1 text-[17px] leading-[29px] text-gray-50'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='size-4'>
                  <path
                    fillRule='evenodd'
                    d='M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z'
                    clipRule='evenodd'
                  />
                </svg>
                Chế độ bảo hành, hậu mãi tốt nhất
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='bg-red min-h-[618px]'>
        <div className='mx-auto grid w-full grid-cols-2 gap-10 py-10 xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <div>
            <h3 className='text-base font-semibold uppercase text-blue-200'>Độ đèn</h3>
            <h2 className='mb-6 mt-4 text-[42px] font-semibold leading-[50px] text-gray-100'>
              Quy trình độ đèn trực tiếp <br /> tại cửa hàng
            </h2>
            <p className='text-base text-gray-50'>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada
              magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna
              mollis.
            </p>
            <p className='mt-7 text-base text-gray-50'>
              Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.
              Aenean lacinia bibendum nulla sed consectetur.
            </p>
          </div>
          <div>
            <div className='flex h-[122px] w-[580px] gap-4 rounded-lg bg-white p-7 drop-shadow-2xl'>
              <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-50 text-[22px] font-semibold text-blue-200'>
                01
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-100'>Tư vấn và đặt lịch</h3>
                <p className='text-base text-gray-50'>Nulla vitae elit libero pharetra augue dapibus.</p>
              </div>
            </div>

            <div className='my-8 ml-24 flex h-[122px] w-[580px] gap-4 rounded-lg bg-white p-7 drop-shadow-2xl'>
              <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-50 text-[22px] font-semibold text-blue-200'>
                02
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-100'>Lắp đặt</h3>
                <p className='text-base text-gray-50'>Nulla vitae elit libero pharetra augue dapibus.</p>
              </div>
            </div>

            <div className='flex h-[122px] w-[580px] gap-4 rounded-lg bg-white p-7 drop-shadow-2xl'>
              <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-50 text-[22px] font-semibold text-blue-200'>
                03
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-100'>Bảo hành</h3>
                <p className='text-base text-gray-50'>Nulla vitae elit libero pharetra augue dapibus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[900px] bg-gradient-to-b from-[#f7f7f7] to-blue-100 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[134px] after:bg-decorate2 after:bg-[length:100%_134px] after:bg-left-top after:bg-no-repeat after:content-['']">
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
                ></Image>
                <div className='flex flex-col'>
                  <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                  <span className='text-base text-gray-50'>Financial Analyst</span>
                </div>
              </div>
              <p className='mt-4 text-base text-gray-50'>
                Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam
                eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero
                condimentum ac laoreet vitae
              </p>
            </div>

            <div className='h-[auto] w-[300px] rounded-lg bg-white p-5 drop-shadow-2xl'>
              <div className='flex space-x-4'>
                <Image
                  src='https://picsum.photos/100/100'
                  width={100}
                  height={100}
                  className='h-[100px] w-[100px] rounded-full'
                ></Image>
                <div className='flex flex-col'>
                  <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                  <span className='text-base text-gray-50'>Financial Analyst</span>
                </div>
              </div>
              <p className='mt-4 text-base text-gray-50'>
                Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam
                eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero
                condimentum ac laoreet vitae
              </p>
            </div>

            <div className='h-[auto] w-[300px] rounded-lg bg-white p-5 drop-shadow-2xl'>
              <div className='flex space-x-4'>
                <Image
                  src='https://picsum.photos/100/100'
                  width={100}
                  height={100}
                  className='h-[100px] w-[100px] rounded-full'
                ></Image>
                <div className='flex flex-col'>
                  <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                  <span className='text-base text-gray-50'>Financial Analyst</span>
                </div>
              </div>
              <p className='mt-4 text-base text-gray-50'>
                Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam
                eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero
                condimentum ac laoreet vitae
              </p>
            </div>

            <div className='h-[auto] w-[300px] rounded-lg bg-white p-5 drop-shadow-2xl'>
              <div className='flex space-x-4'>
                <Image
                  src='https://picsum.photos/100/100'
                  width={100}
                  height={100}
                  className='h-[100px] w-[100px] rounded-full'
                ></Image>
                <div className='flex flex-col'>
                  <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                  <span className='text-base text-gray-50'>Financial Analyst</span>
                </div>
              </div>
              <p className='mt-4 text-base text-gray-50'>
                Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam
                eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero
                condimentum ac laoreet vitae
              </p>
            </div>

            <div className='h-[auto] w-[300px] rounded-lg bg-white p-5 drop-shadow-2xl'>
              <div className='flex space-x-4'>
                <Image
                  src='https://picsum.photos/100/100'
                  width={100}
                  height={100}
                  className='h-[100px] w-[100px] rounded-full'
                ></Image>
                <div className='flex flex-col'>
                  <span className='text-xl font-semibold text-gray-100'>Coriss Ambady</span>
                  <span className='text-base text-gray-50'>Financial Analyst</span>
                </div>
              </div>
              <p className='mt-4 text-base text-gray-50'>
                Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam
                eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero
                condimentum ac laoreet vitae
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-gray-100 before:absolute before:left-0 before:right-0 before:top-[-133px] before:h-[134px] before:bg-decorate3 before:bg-[length:100%_134px] before:bg-left-top before:bg-no-repeat before:content-['']">
        <div className='mx-auto w-full pt-10 xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
          <div className='flex gap-10'>
            <div className='basis-1/2'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6264.934972323831!2d105.78153597238267!3d20.98651835644432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345334df11ecbb%3A0x9c9c75731a324e58!2zNDM3IMSQLiBUaGFuaCBCw6xuaCwgUC4gTeG7mSBMYW8sIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1719830230608!5m2!1svi!2s'
                width={'100%'}
                height='450'
                style={{ border: 0 }}
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>

            <div className='basis-1/2 space-y-4 text-white'>
              <h4 className='text-2xl font-semibold leading-7'>Liên hệ</h4>
              <div className='flex space-x-2 text-base leading-7 text-[#cacaca]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                  />
                </svg>
                <span className='text-base leading-7'>437c Thanh Bình, Mộ Lao, Hà Đông, Hà Nội</span>
              </div>
              <div className='flex space-x-2 text-[#cacaca]'>
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
                    d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                  />
                </svg>
                <a className='text-base leading-7' href='tel:+4733378901'>
                  0988 888 888
                </a>
              </div>
              <div className='flex space-x-2 text-base leading-7 text-[#cacaca]'>
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
                    d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                  />
                </svg>

                <a className='text-base leading-7' href='mailto:contact@vhtlighting.com'>
                  contact@vhtlighting.com
                </a>
              </div>
              <div className='flex items-center gap-5'>
                <a href='https://www.facebook.com/profile.php?id=61556883868996' target='_blank'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 32 32' fill='none'>
                    <path
                      d='M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z'
                      fill='white'
                    ></path>
                  </svg>
                </a>

                <a href='https://www.facebook.com/profile.php?id=61556883868996' target='_blank'>
                  <svg width='9' height='18' viewBox='0 0 9 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M7.08984 3.38379H8.65234V0.727539C8.3138 0.688477 7.95573 0.65918 7.57812 0.639648C7.20052 0.620117 6.8099 0.610352 6.40625 0.610352C6.40625 0.610352 6.40299 0.610352 6.39648 0.610352C6.38997 0.610352 6.38021 0.610352 6.36719 0.610352C5.23438 0.610352 4.31641 0.948893 3.61328 1.62598C2.91016 2.30306 2.55859 3.27311 2.55859 4.53613V6.72363H0V9.69238H2.55859V17.29H5.625V9.69238H8.18359L8.55469 6.72363H5.625V4.8291C5.625 4.38639 5.71615 4.03483 5.89844 3.77441C6.08073 3.514 6.47786 3.38379 7.08984 3.38379Z'
                      fill='white'
                    />
                  </svg>
                </a>

                <a href='https://www.facebook.com/profile.php?id=61556883868996' target='_blank'>
                  <svg width='19' height='14' viewBox='0 0 19 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M18.3398 5.03613C18.3398 4.99707 18.3431 4.95801 18.3496 4.91895C18.3561 4.87988 18.3594 4.84082 18.3594 4.80176C18.3594 4.21582 18.291 3.64941 18.1543 3.10254C18.0176 2.55566 17.8255 2.04134 17.5781 1.55957L17.5977 1.59863C17.4154 1.3903 17.2038 1.21452 16.9629 1.07129C16.722 0.92806 16.4583 0.830403 16.1719 0.77832L16.1523 0.758789C15.2669 0.680664 14.3229 0.618815 13.3203 0.573242C12.3177 0.527669 11.2956 0.504883 10.2539 0.504883C10.0586 0.504883 9.86979 0.504883 9.6875 0.504883C9.50521 0.504883 9.31641 0.504883 9.12109 0.504883H9.17969C9.01042 0.504883 8.82812 0.504883 8.63281 0.504883C8.4375 0.504883 8.24219 0.504883 8.04688 0.504883C7.03125 0.504883 6.01562 0.527669 5 0.573242C3.98438 0.618815 2.97526 0.687175 1.97266 0.77832L2.22656 0.758789C1.99219 0.797852 1.77083 0.872722 1.5625 0.983398C1.35417 1.09408 1.17188 1.22754 1.01562 1.38379C0.638021 1.72233 0.400391 2.15853 0.302734 2.69238C0.205078 3.22624 0.136719 3.74707 0.0976562 4.25488C0.0716146 4.65853 0.0488281 5.09147 0.0292969 5.55371C0.00976562 6.01595 0 6.48145 0 6.9502C0 7.41895 0.00976562 7.89095 0.0292969 8.36621C0.0488281 8.84147 0.0716146 9.31348 0.0976562 9.78223V9.64551C0.110677 9.94499 0.139974 10.238 0.185547 10.5244C0.23112 10.8109 0.286458 11.0908 0.351562 11.3643V11.3252C0.403646 11.5335 0.478516 11.7354 0.576172 11.9307C0.673828 12.126 0.794271 12.3018 0.9375 12.458C1.10677 12.6143 1.29557 12.7477 1.50391 12.8584C1.71224 12.9691 1.93359 13.0505 2.16797 13.1025H2.1875C2.8776 13.1937 3.61328 13.262 4.39453 13.3076C5.17578 13.3532 5.97656 13.376 6.79688 13.376C6.9401 13.376 7.08008 13.376 7.2168 13.376C7.35352 13.376 7.49349 13.376 7.63672 13.376H7.59766C8.32682 13.389 9.03646 13.3955 9.72656 13.3955C10.4167 13.3955 11.11 13.3857 11.8066 13.3662C12.5033 13.3467 13.2031 13.3174 13.9062 13.2783C14.6094 13.2393 15.3385 13.1937 16.0938 13.1416C16.3411 13.1025 16.5723 13.0244 16.7871 12.9072C17.002 12.79 17.194 12.6533 17.3633 12.4971C17.4805 12.3799 17.5814 12.2529 17.666 12.1162C17.7507 11.9795 17.819 11.833 17.8711 11.6768V11.6572C18.0143 11.2536 18.125 10.8206 18.2031 10.3584C18.2812 9.89616 18.3203 9.41764 18.3203 8.92285C18.3203 8.90983 18.3203 8.89355 18.3203 8.87402C18.3203 8.85449 18.3203 8.83822 18.3203 8.8252C18.3333 8.59082 18.3398 7.96256 18.3398 6.94043C18.3398 5.91829 18.3398 5.28353 18.3398 5.03613ZM7.30469 9.33301V4.15723L12.2266 6.75488C11.5365 7.14551 10.7585 7.55566 9.89258 7.98535C9.02669 8.41504 8.16406 8.86426 7.30469 9.33301Z'
                      fill='white'
                    />
                  </svg>
                </a>

                <a href='https://www.facebook.com/profile.php?id=61556883868996' target='_blank'>
                  <svg width='17' height='14' viewBox='0 0 17 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M16.6992 1.77441C16.4128 1.90462 16.1035 2.0153 15.7715 2.10645C15.4395 2.19759 15.1042 2.26921 14.7656 2.32129H14.7266C15.0781 2.09993 15.3841 1.82975 15.6445 1.51074C15.9049 1.19173 16.1003 0.836914 16.2305 0.446289V0.426758C15.918 0.60905 15.5827 0.77181 15.2246 0.915039C14.8665 1.05827 14.4922 1.16895 14.1016 1.24707L14.0625 1.2666C13.75 0.92806 13.3757 0.657878 12.9395 0.456055C12.5033 0.254231 12.0378 0.15332 11.543 0.15332C10.6055 0.15332 9.80143 0.488606 9.13086 1.15918C8.46029 1.82975 8.125 2.63379 8.125 3.57129C8.125 3.71452 8.13477 3.85449 8.1543 3.99121C8.17383 4.12793 8.19661 4.26139 8.22266 4.3916V4.37207C7.51953 4.33301 6.83594 4.22233 6.17188 4.04004C5.50781 3.85775 4.8763 3.61361 4.27734 3.30762C3.67839 3.00163 3.11849 2.6403 2.59766 2.22363C2.08984 1.79395 1.62109 1.3252 1.19141 0.817383V0.797852C1.04818 1.04525 0.934245 1.31543 0.849609 1.6084C0.764974 1.90137 0.722656 2.2041 0.722656 2.5166C0.722656 2.52962 0.722656 2.53613 0.722656 2.53613C0.722656 3.12207 0.859375 3.66243 1.13281 4.15723C1.40625 4.65202 1.77083 5.05566 2.22656 5.36816H2.24609C1.95964 5.35514 1.68294 5.31283 1.41602 5.24121C1.14909 5.1696 0.904948 5.06868 0.683594 4.93848V4.97754C0.696615 5.79785 0.963542 6.52051 1.48438 7.14551C2.00521 7.77051 2.64974 8.16113 3.41797 8.31738H3.4375C3.30729 8.35645 3.16406 8.389 3.00781 8.41504C2.85156 8.44108 2.6888 8.4541 2.51953 8.4541C2.41536 8.4541 2.30794 8.45085 2.19727 8.44434C2.08659 8.43783 1.97266 8.42155 1.85547 8.39551H1.875C2.10938 9.08561 2.51628 9.64876 3.0957 10.085C3.67513 10.5212 4.33594 10.7458 5.07812 10.7588C4.50521 11.2145 3.85742 11.5726 3.13477 11.833C2.41211 12.0934 1.65365 12.2301 0.859375 12.2432C0.859375 12.2432 0.85612 12.2432 0.849609 12.2432C0.843099 12.2432 0.839844 12.2432 0.839844 12.2432C0.696615 12.2432 0.553385 12.2367 0.410156 12.2236C0.266927 12.2106 0.130208 12.1976 0 12.1846H0.0195312C0.761719 12.6663 1.57552 13.0439 2.46094 13.3174C3.34635 13.5908 4.27734 13.7275 5.25391 13.7275C5.25391 13.7275 5.25716 13.7275 5.26367 13.7275C5.27018 13.7275 5.27344 13.7275 5.27344 13.7275C5.28646 13.7275 5.29948 13.7275 5.3125 13.7275C5.32552 13.7275 5.34505 13.7275 5.37109 13.7275C6.69922 13.7275 7.94922 13.4736 9.12109 12.9658C10.293 12.458 11.3184 11.7679 12.1973 10.8955C13.0762 10.0231 13.763 9.00098 14.2578 7.8291C14.7656 6.65723 15.0195 5.40072 15.0195 4.05957C15.0195 4.04655 15.0195 4.03353 15.0195 4.02051C15.0195 4.00749 15.0195 3.99447 15.0195 3.98145V4.00098C15.0195 3.92285 15.0195 3.84798 15.0195 3.77637C15.0195 3.70475 15.0195 3.62988 15.0195 3.55176C15.3451 3.30436 15.6478 3.03418 15.9277 2.74121C16.2077 2.44824 16.4583 2.139 16.6797 1.81348L16.6992 1.77441Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='mx-auto mt-5 py-4 text-center text-[#cacaca]'>
            © {new Date().getUTCFullYear() - 2024 > 0 ? `2024 - ${new Date().getUTCFullYear()}` : '2024'} VHT Lighting.
            All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
