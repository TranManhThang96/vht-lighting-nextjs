import { title } from 'process';
import React from 'react';
import clsx from 'clsx';

const UpgradeProcess = () => {
  const processes = [
    {
      title: 'Tư vấn và đặt lịch',
      description: 'Khách hàng sẽ được tư vấn và đặt lịch trước khi mang xe đến.',
      customClass: '',
    },
    {
      title: 'Lắp đặt',
      description: 'Kỹ thuật viên lắp đặt và tinh chỉnh ánh sáng.',
      customClass: 'ml-24 my-8',
    },
    {
      title: 'Bảo hành',
      description: 'Bảo hành nếu có lỗi của nhà sản xuất hoặc quá trình lắp đặt.',
      customClass: '',
    },
  ];

  return (
    <section>
      <div className='mx-auto grid w-full grid-cols-2 gap-10 py-[80px] xl:max-w-screen-xl 2xl:max-w-screen-2xl'>
        <div>
          <h3 className='text-base font-semibold uppercase text-blue-200'>Nâng cấp ánh sáng</h3>
          <h2 className='mb-6 mt-4 text-[42px] font-semibold leading-[50px] text-gray-100'>
            Quy trình nâng cấp ánh sáng <br /> tại VHT Lighting
          </h2>
          <p className='text-base text-gray-50'>
            Khách hàng sẽ có những trải nghiệm tuyệt vời khi nâng cấp ánh sáng tại VHT Lighting. Ngay từ bước tư vấn kỹ
            lưỡng cho đến lắp đặt chuyên nghiệp và bảo hành. Chúng tôi đang nỗ lực từng ngày để nâng tầm thương hiệu và
            phục vụ mọi nhu cầu của khách hàng.
          </p>
          <p className='mt-7 text-base text-gray-50'>
            Chúng tôi luôn ưu tiên <b>chất lượng hơn số lượng</b>, nên khách hàng sẽ có trải nghiệm tốt nhất khi nâng
            cấp ánh sáng tại VHT Lighting. Hãy cùng khám phá quy trình nâng cấp ánh sáng tại VHT Lighting.
          </p>
          <a href='https://www.facebook.com/61556883868996/videos/2167286146944572' target='_blank'>
            <button className='mt-9 h-[52px] w-[140px] rounded-full bg-blue-200 text-base font-semibold text-white'>
              Xem thêm
            </button>
          </a>
        </div>
        <div>
          {processes.map((process, index) => (
            <div
              key={`process-${index}`}
              className={clsx(
                'flex h-[122px] w-[580px] gap-4 rounded-lg bg-white p-7 drop-shadow-2xl',
                process.customClass,
              )}
            >
              <div className='flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-50 text-[22px] font-semibold text-blue-200'>
                {`0${index + 1}`}
              </div>
              <div>
                <h3 className='text-xl font-semibold text-gray-100'>{process.title}</h3>
                <p className='text-base text-gray-50'>{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpgradeProcess;
