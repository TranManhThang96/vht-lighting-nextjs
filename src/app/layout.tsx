import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const nunito = Hanken_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VHT Lighting',
  description:
    'VHT Lighting giải pháp nâng cấp ánh sáng toàn diện cho motor, xe gắn máy. Chúng tôi cung cấp các sản phẩm bi cầu, led audi, mạch hiệu ứng, phụ kiện bi cầu. Chế độ bảo hành và hậu mãi tốt nhất.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className}>{children}</body>
      <GoogleAnalytics gaId='G-7VS64HN6ER' />
    </html>
  );
}
