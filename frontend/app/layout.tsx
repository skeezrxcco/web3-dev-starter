import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { Providers } from './providers'
import ContextProvider from '@/context'

export const metadata: Metadata = {
  title: "AppKit Example App",
  description: "Powered by WalletConnect"
};

// Suppress hydration warnings from Dark Reader extension
const suppressDarkReaderWarnings = `
  (function() {
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.includes('Warning: Extra attributes from the server')) {
        if (args[0]?.includes('data-darkreader')) {
          return;
        }
      }
      originalError.apply(console, args);
    };
  })();
`;

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const {get} = await headers();
  const cookies = get('cookie');

  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: suppressDarkReaderWarnings }} />
      </head>
      <body>
        <Providers>
          <ContextProvider cookies={cookies}>{children}</ContextProvider>
        </Providers>
      </body>
    </html>
  );
}