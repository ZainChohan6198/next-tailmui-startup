'use client';
import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Layout from '@common/Layout';
import FeedbackWrapper from '@components/wrapper/FeedbackWrapper';
import { StyledEngineProvider } from '@mui/styled-engine';
import { ThemeProvider } from '@mui/system';
import CookieConsent from 'react-cookie-consent';
import theme from '../theme';
import { company } from '@constants/company/Details';
import Header from '@common/Layout/Header';

const inter = Inter({ subsets: ['latin'] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
        <meta name="theme-color" content="#58ade0" />
      </Head>
      <body className={inter.className}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CookieConsent
              location="bottom"
              buttonText="ACCEPT"
              cookieName={company.cookies_name}
              style={{ background: '#FBE200' }}
              buttonStyle={{
                background: 'green',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 'bold',
              }}
              expires={150}
            >
              <span className="text-black">
                We are using cookies to give you the best experience on our
                website. You can find out more about our cookie policy
              </span>
              <Link href="/legal/policy/cookie">
                <a className="text-primary font-bold"> here.</a>
              </Link>
            </CookieConsent>
            <Layout>{children}</Layout>
            <FeedbackWrapper />
          </ThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
