import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/providers";
import BusinessSchema from "@/components/BusinessSchema";
import { Inter } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://cybercircusconnect.com"),
  title: {
    default: "Cyber Circus | Enterprise Software Development & Digital Transformation",
    template: "%s | Cyber Circus",
  },
  description:
    "Cyber Circus delivers enterprise-grade custom software solutions, digital transformation services, and innovative technology consulting for global businesses. Transform your operations with our expert engineering team.",
  keywords: [
    "enterprise software development",
    "custom software solutions",
    "digital transformation",
    "cloud architecture",
    "software consulting",
    "enterprise applications",
    "technology services",
    "digital innovation",
    "software engineering",
    "IT consulting",
    "SaaS development",
    "web application development",
    "mobile app development",
    "DevOps services",
    "UI/UX design",
    "quality assurance",
    "enterprise integration",
    "data engineering",
    "analytics solutions",
  ],
  authors: [{ name: "Cyber Circus", url: "https://cybercircusconnect.com" }],
  creator: "Cyber Circus",
  publisher: "Cyber Circus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cybercircusconnect.com",
    siteName: "Cyber Circus",
    title: "Cyber Circus | Enterprise Software Development & Digital Transformation",
    description:
      "Leading enterprise software development company delivering custom solutions, digital transformation, and technology consulting for global businesses.",
    images: [
      {
        url: "https://cybercircusconnect.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cyber Circus - Enterprise Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Circus | Enterprise Software Development & Digital Transformation",
    description:
      "Enterprise software development company delivering custom solutions, digital transformation, and technology consulting for global businesses.",
    images: ["https://cybercircusconnect.com/opengraph-image.png"],
    creator: "@CyberCircus",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://cybercircusconnect.com",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "your-google-verification-code",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} min-h-screen flex flex-col antialiased bg-white dark:bg-gray-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1" role="main">
            {children}
          </main>
          <Footer />
          <BusinessSchema />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
