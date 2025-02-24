import { Inter, Roboto_Mono } from "next/font/google";
import { DarkModeProvider } from '../context/DarkModeContext';
import "./globals.css";

// Gunakan font Inter untuk sans-serif
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Gunakan font Roboto Mono untuk monospace
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Gvnorln",
  description: "Website Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`} // Gunakan variabel font
      >
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}