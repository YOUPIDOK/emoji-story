import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emoji Story",
  description: "Lyon M2. Collaboratively build a story with emoji and openAI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="area">
          <ul className="circles">
            <li>🙂</li>
            <li>😡</li>
            <li>😂</li>
            <li>😏</li>
            <li>😍</li>
            <li>😚</li>
            <li>😛</li>
            <li>😜</li>
            <li>😝</li>
            <li>😎</li>
          </ul>
        </div>
        <div className="h-screen">
          <div className="flex justify-center py-8">
            <h1 className="text-5xl font-bold">Emoji Story</h1>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
