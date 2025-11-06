import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/providers";
import BusinessSchema from "@/components/BusinessSchema";
import { Poppins } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Cyber Circus | Enterprise Software Development & Digital Transformation",
  description:
    "Cyber Circus delivers enterprise-grade custom software solutions, digital transformation services, and innovative technology consulting for global businesses. Transform your operations with our expert engineering team.",
  keywords:
    "enterprise software development, custom software solutions, digital transformation, cloud architecture, software consulting, enterprise applications, technology services, digital innovation, software engineering, IT consulting",
  authors: [{ name: "Cyber Circus", url: "https://cybercircusconnect.com" }],
  publisher: "Cyber Circus",
  metadataBase: new URL("https://cybercircusconnect.com"),
  openGraph: {
    title: "Cyber Circus | Enterprise Software Development & Digital Transformation",
    description:
      "Leading enterprise software development company delivering custom solutions, digital transformation, and technology consulting for global businesses.",
    url: "https://cybercircusconnect.com",
    siteName: "Cyber Circus",
    images: [
      {
        url: "https://cybercircusconnect.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cyber Circus - Enterprise Software Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@CyberCircus",
    creator: "@CyberCircus",
    title: "Cyber Circus | Enterprise Software Development & Digital Transformation",
    description:
      "Enterprise software development company delivering custom solutions, digital transformation, and technology consulting for global businesses.",
    images: ["https://cybercircusconnect.com/opengraph-image.png"],
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
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://cybercircusconnect.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${poppins.variable} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BusinessSchema />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
