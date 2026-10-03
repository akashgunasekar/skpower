import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";
import { constructMetadata, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  ...constructMetadata({
    title: "SK Power Cook Machinery | Commercial Food Processing Machinery & Solutions",
    description:
      "SK Power Cook Machinery provides commercial food processing solution machinery including Planetary Mixer Machine – Gas / Induction and Colino Mixer Machine – Gas / Induction for professional food preparation environments.",
  }),
  metadataBase: new URL("https://skpcm.com"),
  icons: {
    icon: "/brands/sk-powercook-logo.png",
    apple: "/brands/sk-powercook-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const siteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
