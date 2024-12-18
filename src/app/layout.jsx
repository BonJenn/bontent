import { Inter } from "next/font/google";
import { Manrope } from 'next/font/google';
import styles from "./page.module.css";
import './globals.css';
import GoogleAnalytics from '../components/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Bontent",
  description: "Web and Software Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} ${styles.body}`}>
        {children}
      </body>
    </html>
  );
}