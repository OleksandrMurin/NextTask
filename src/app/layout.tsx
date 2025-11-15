import { generateCardPalette } from "@/components/rankPaletteInjector";
import "./globals.css";
import { Providers } from "./providers";

import { JetBrains_Mono, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Task Manager",
  description: "Gamified task cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const css = generateCardPalette();
  return (
    <html lang="en">
      <head></head>
      <body
        style={css}
        className={`${poppins.variable} ${jetbrainsMono.variable} bg-[#F8F6FB] antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
