import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";

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

export const metadata = {
  title: "Bike Doctor Pro",
  description: "Bike Repairing workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
      </body>

      
      
    </html>
  );
}
