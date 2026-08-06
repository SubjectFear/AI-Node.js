import '@/styles/animate.css';
import '@/styles/prism-vsc-dark-plus.css';
import '@/styles/star.css';
import '@/styles/tailwind.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';
import ToasterContext from '../context/ToastContext';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const themeInitScript = `
  (function () {
    try {
      var stored = window.localStorage.getItem('theme');
      var theme = stored === 'light' ? 'light' : 'dark';
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className='bg-slate-50 text-slate-900 antialiased dark:bg-[#050816] dark:text-white'>
        <ThemeProvider>
          <div className='site-shell isolate'>
            <NextTopLoader
              color='#8b5cf6'
              crawlSpeed={300}
              showSpinner={false}
              shadow='none'
            />

            <AuthProvider>
              <Header />
              {children}
              <Footer />

              <ToasterContext />
            </AuthProvider>
          </div>

          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

