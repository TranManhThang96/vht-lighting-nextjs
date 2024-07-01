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

      <section className="relative min-h-[700px] bg-gradient-to-b from-blue-100 to-[#f7f7f7] before:absolute before:left-0 before:right-0 before:top-[-134px] before:h-[134px] before:bg-banner before:bg-[length:100%_134px] before:bg-left-top before:bg-no-repeat before:content-['']">
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

      <section className="relative min-h-[900px] bg-gradient-to-b from-[#f7f7f7] to-blue-100 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-[134px] after:bg-banner2 after:bg-[length:100%_134px] after:bg-left-top after:bg-no-repeat after:content-['']">
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

      <section className='min-h-[450px] bg-gray-100'>
        <div className='mx-auto flex w-full gap-10 py-10 xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
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

          <div className='basis-1/2'>
            <h4>Liên hệ</h4>
            <p>
              <b>Địa chỉ</b>: 437c Thanh Bình, Mộ Lao, Hà Đông, Hà Nội
            </p>
            <p>
              <b>Hotline</b>: <a href='tel:+4733378901'>0988 888 888</a>
            </p>
            <div>
              <b>Social</b>:
              <div>
                <a href='https://www.facebook.com/profile.php?id=61556883868996' target='_blank'>
                  <svg width='9' height='18' viewBox='0 0 9 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M7.08984 3.38379H8.65234V0.727539C8.3138 0.688477 7.95573 0.65918 7.57812 0.639648C7.20052 0.620117 6.8099 0.610352 6.40625 0.610352C6.40625 0.610352 6.40299 0.610352 6.39648 0.610352C6.38997 0.610352 6.38021 0.610352 6.36719 0.610352C5.23438 0.610352 4.31641 0.948893 3.61328 1.62598C2.91016 2.30306 2.55859 3.27311 2.55859 4.53613V6.72363H0V9.69238H2.55859V17.29H5.625V9.69238H8.18359L8.55469 6.72363H5.625V4.8291C5.625 4.38639 5.71615 4.03483 5.89844 3.77441C6.08073 3.514 6.47786 3.38379 7.08984 3.38379Z'
                      fill='white'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
