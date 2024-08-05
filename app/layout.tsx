import React from 'react';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import PageTransition from '../components/PageTransition';
import LoadingBar from '../components/LoadingBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <PageTransition>
          <LoadingBar />
          <Header />
          <main>
          
              {children}
          
          </main>
          </PageTransition>
        </CartProvider>
      </body>
    </html>
  )
}