import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ascend - Your Fitness Journey",
  description: "Elevate your fitness journey with personalized workouts, hydration tracking, and expert guidance",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))] text-white antialiased p-4 sm:p-6 md:p-8">
        <nav className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold gradient-text transition-all duration-300 hover:scale-105">Ascend</a>
          <div className="space-x-6">
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="/login" className="text-gray-400 hover:text-white transition-colors">Login</a>
            <a href="/signup" className="btn-primary">Sign Up</a>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
