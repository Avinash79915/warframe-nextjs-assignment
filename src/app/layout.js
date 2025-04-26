import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loader from "./components/ui/Loader";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Financial and target",
  description: "Your app description here",
  icons: {
    icon: "/images/Logo.png", 
    shortcut: "/my-app-icon.ico", 
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Loader />
        {children}
      </body>
    </html>
  );
}
