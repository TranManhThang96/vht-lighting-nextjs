import Image from 'next/image';
import React from 'react';

const Service = () => {
  return (
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
  );
};

export default Service;
