import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { AdminProvider } from "@/context/AdminContext";
import { PinProvider } from "@/context/AppSecurityContext";
import { DashboardGate } from "@/components/dashboard-gate";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evertrust Online Bank",
  description: "Secure, Simple, Smart and Reliable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Toaster />
        <PinProvider>
          <AppProvider>
            <DashboardGate>
            <AdminProvider>{children}</AdminProvider>
            </DashboardGate>
          </AppProvider>
        </PinProvider>
      </body>
    </html>
  );
}
