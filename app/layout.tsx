import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "../components/providers/theme-provider";
import { cn } from "@/lib/utils";
import ModalProvider from "@/components/providers/modal-provider";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnapTalk| Your place to talk and manage",
  description: "SnapTalk| Your place to talk and manage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:bg-slate-950")}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="snaptalk-theme"
          >
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
