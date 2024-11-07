import { Afacad } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import { Analytics } from '@vercel/analytics/react';

import "./globals.css";

const fontHeading = Afacad({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: "Mohammed Mahdi | Full-Stack Developer",
  description:
    "Welcome to the portfolio of Mohammed Mahdi. Explore my projects, skills, and experience in web development. Discover my journey and get in touch for collaboration opportunities.",
  keywords: ["Full-Stack Developer", "Web Development", "React", "Next.js", "JavaScript"],
  authors: [{ name: "Mohammed Mahdi" }],
  creator: "Mohammed Mahdi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    site_name: "Mohammed Mahdi Portfolio",
    title: "Mohammed Mahdi | Full-Stack Developer",
    description: "Full-Stack Developer specializing in modern web technologies",
    images: [
      {
        url: "/myphoto.jpg", // Add your custom OG image
        width: 1200,
        height: 630,
        alt: "Mohammed Mahdi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Mahdi | Full-Stack Developer",
    description: "Full-Stack Developer specializing in modern web technologies",
    images: ["/myphoto.jpg"], // Same as OG image
    creator: "@YourTwitterHandle",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        fontHeading.variable,
        fontBody.variable,
      )}
    >
      <body
        className={cn(
          "min-h-screen bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 dark:from-[#112e42] dark:via-[#0a192f] dark:to-[#112e42] antialiased",
          fontBody.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navigation */}
          <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-200/80 dark:bg-[#112e42]/80 border-b border-slate-200/20 dark:border-slate-800/20">
            <NavBar />
          </header>

          {/* Main Content */}
          <main className="pt-16">
            {children}
          </main>

          {/* Noise Overlay */}
          <div className="pointer-events-none fixed inset-0 z-30 opacity-20">
            <div className="h-full w-full bg-noise" />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
