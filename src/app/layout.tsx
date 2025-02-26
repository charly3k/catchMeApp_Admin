import type { Metadata } from "next";
/* import localFont from "next/font/local"; */
import { Raleway, DM_Sans } from "next/font/google";
import "./globals.css";
import ToastComponent from "@/components/ToastComponent";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: "700",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmSans",
  weight: "400",
});
/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "CatchMeApp",
  description: "theCatchMeApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="../assets/favicon.png"
          //type="image/<generated>"
          // sizes="<generated>"
        />
      </head>
      <body
        className={`${raleway.variable} ${dmSans.variable} antialiased bg-lightWhite`}
      >
        <ToastComponent />
        {children}
      </body>
    </html>
  );
}
