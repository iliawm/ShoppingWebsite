import type { Metadata } from "next";

import "./globals.css";
import LocalFont from "next/font/local";
import Navbar from "@/Components/Navbar";
import UnderNav from "@/ui/Nav/UnderNav";
import {Suspense} from "react";




const vazir = LocalFont({
    src: [
        {
            path: '../public/fonts/vazir-font-v16.1.0/Vazir-Thin.woff',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/vazir-font-v16.1.0/Vazir-Light.woff',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/vazir-font-v16.1.0/Vazir-Medium.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/vazir-font-v16.1.0/Vazir-Bold.woff',
            weight: '500',
            style: 'normal',
        },


    ],
    display: 'swap',
    preload:true,
    variable: '--font-vazir',

});

export const metadata: Metadata = {
  title: "فروشگاه لوازم",
  description: "لوازم خود را به ما بسپارید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"hide-scrollbar"}>
      <body
        className={`font-[vazir] antialiased min-h-screen h-screen  w-full  max-h-screen`}
        dir={"rtl"}
      >
      <section className={"NavSection h-fit bg-white  w-full flex flex-col z-70"}>
          <Suspense fallback={<div>Loading...</div>}>
          <Navbar/>
          </Suspense>

          <div className={"UnderNav w-full h-fit  gap-3 flex"}>
              <Suspense fallback={<div>Loading...</div>}>
                  <UnderNav />
              </Suspense>
          </div>
      </section>
      <div className={"w-full h-fit bg-white text-black"}>
        {children}
      </div>
      </body>
    </html>
  );
}
