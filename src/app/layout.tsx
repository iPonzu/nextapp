import type { Metadata } from 'next';
 
import './globals.css'; 


export const metadata: Metadata = {
  title: 'My Next.js Site',
  description: 'Generated by create next app',
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* UI UX */}
      <head>
        <link rel='icon' href='/main.ico' sizes='any' />
      </head>
      
      <body>{children}</body>
    </html>
  );
}