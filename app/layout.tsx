import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Bobo Granola",
  description: "Trouvez votre partenaire idéal pour une relation écologique et engagée.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
