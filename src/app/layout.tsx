import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/redux/store-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trello Test',
  description: 'Copyright Adlet Ibraimov',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang='en'>
        <body className='flex flex-col bg-bg '>{children}</body>
      </html>
    </StoreProvider>
  );
}
