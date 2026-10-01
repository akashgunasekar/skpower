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
    title: "SK Power Cook Machinery | Commercial Mixing Machines",
    description:
      "SK Power Cook Machinery provides professional commercial mixing machines including Planetary Mixer Machine – Gas and Colino Mixer Machine for professional food preparation environments.",
  }),
  metadataBase: new URL("https://skpowercook.example"),
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
