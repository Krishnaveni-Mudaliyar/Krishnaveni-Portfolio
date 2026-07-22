import React from 'react';
import '../../styles/globals.css';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const metadata = {
  title: 'Krishnaveni Mudaliyar | Business Central Developer',
  description: 'Business Central technical consultant portfolio with AL, ERP, reporting, and solution architecture focus.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
