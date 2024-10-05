import localFont from "next/font/local";
import "./globals.css";
import { Black_Ops_One } from "@next/font/google";
import { Sono } from "@next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sono = Sono({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1 className={`${blackOpsOne.className} antialiased`}></h1>
        {children}
      </body>
    </html>
  );
}
