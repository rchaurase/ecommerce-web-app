'use client'; // Add this directive at the top if necessary

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SubHeader from './components/header/subheader/SubHeader';
import Footer from './components/footer/Footer';
import Navbar from './components/header/navbar/Navbar';
import { Provider } from 'react-redux';
import { store } from './store/store';

const inter = Inter({ subsets: ['latin'] });

  const metadata: Metadata = {
  title: 'Deep Sea Cart',
  description: 'Shop Deep, Save Big',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <div className="relative min-h-screen">
            <SubHeader />
            <Navbar />
            <main className="">
              {/* Adjust padding to make room for the fixed header and footer */}
              {children}
            </main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
