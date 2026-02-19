import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { TaskProvider } from "@/context/TaskContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Task Manager",
    description: "A simple task management application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <TaskProvider>
                    <div className="min-h-screen flex flex-col">
                        <header>
                            <Navbar />
                        </header>
                        <main className="flex-grow">
                            {children}
                        </main>
                        <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-4">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                                    © 2024 Task Manager. Built with Next.js and React.
                                </p>
                            </div>
                        </footer>
                    </div>
                </TaskProvider>
            </body>
        </html>
    );
}
