import { Poppins } from "next/font/google";
import {Sidebar} from '@/components/Sidebar'
import Navbar from "@/components/Navbar";

import "./globals.css";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
});

export const metadata = {
  title: "FrontEnd Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>

      <body className='flex min-h-screen'>

        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="flex-1 text-white">
          <nav>
            <Navbar />
          </nav>
          <main className="text-white">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}