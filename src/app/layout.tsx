import clsx from 'clsx';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saas Landing Page',
  description: 'Template for SaaS landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, 'antialiased bg-[#EAEEFE]')}>
        {children}
      </body>
    </html>
  );
}
