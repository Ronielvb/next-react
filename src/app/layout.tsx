import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from '@/providers/auth'

const inter = Inter({ subsets: ['latin']})
export const metadata: Metadata = {
  title: "Teste",
  description: "Sistema Teste",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >     
          <AuthProvider >          
              {children}          
          </AuthProvider> 
      </body>
    </html>
  );
}
