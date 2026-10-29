import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://michaelbender.co.za"),
  title: "Michael Bender | CEO, RCD Espanyol de Barcelona Academy SA & IberCup SA",
  description:
    "Executive portfolio of Michael Bender: CEO of RCD Espanyol de Barcelona Academy SA, IberCup International Youth Football SA, and sports governance diplomatic envoy.",
  openGraph: {
    title: "Michael Bender | Executive Portfolio",
    description: "Sports governance, elite academy pathways, and corporate brand leadership.",
    type: "profile",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
