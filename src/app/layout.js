// import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "MEDGineering - Medical Engineering Solutions",
  description: "Professional medical engineering consulting and solutions. Expert healthcare technology consulting services.",
  keywords: "medical engineering, healthcare technology, medical consulting, healthcare solutions",
  authors: [{ name: "MEDGineering" }],
  creator: "MEDGineering",
  publisher: "MEDGineering",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://medgineering.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MEDGineering - Medical Engineering Solutions",
    description: "Professional medical engineering consulting and solutions",
    url: "https://medgineering.com",
    siteName: "MEDGineering",
    type: "website",
    images: [
      {
        url: "/logo400.png",
        width: 400,
        height: 400,
        alt: "MEDGineering Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEDGineering - Medical Engineering Solutions",
    description: "Professional medical engineering consulting and solutions",
    images: ["/logo400.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${openSans.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
