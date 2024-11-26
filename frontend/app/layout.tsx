import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { Providers } from './providers'
import ContextProvider from '@/context'

export const metadata: Metadata = {
  title: "AppKit Example App",
  description: "Powered by WalletConnect"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const {get} = await headers();
  const cookies = get('cookie');

  return (
    <html lang="en">
      <body>
        <Providers>
          <ContextProvider cookies={cookies}>{children}</ContextProvider>
        </Providers>
      </body>
    </html>
  );
}