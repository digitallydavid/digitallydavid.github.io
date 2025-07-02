import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "../components/ClientLayout";

export const metadata: Metadata = {
  title: "David Reynolds | Technical Artist Portfolio",
  description: "David Reynolds - Professional technical artist portfolio showcasing game development work, tools, and technical expertise",
  keywords: ["technical artist", "game development", "shaders", "tools", "vfx", "procedural generation", "pipeline", "David Reynolds"],
  authors: [{ name: "David Reynolds" }],
  creator: "David Reynolds",
  publisher: "David Reynolds",
  openGraph: {
    title: "David Reynolds | Technical Artist Portfolio",
    description: "David Reynolds - Professional technical artist portfolio showcasing game development work, tools, and technical expertise",
    url: "https://davidreynolds.dev",
    siteName: "David Reynolds Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Technical Artist Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Reynolds | Technical Artist Portfolio",
    description: "David Reynolds - Professional technical artist portfolio showcasing game development work, tools, and technical expertise",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-sans antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
