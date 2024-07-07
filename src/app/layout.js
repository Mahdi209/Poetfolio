import { Afacad } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";

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
  title: "Mohammed Mahdi | Portfolio",
  description:
    "Welcome to the portfolio of Mohammed Mahdi. Explore my projects, skills, and experience in web development and design. Discover my journey and get in touch for collaboration opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-slate-200 dark:bg-[#112e42] antialiased",
          fontHeading.className,
          fontBody.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <hr />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
