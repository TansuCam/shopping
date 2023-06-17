// Next.js
// ---------------
import { Inter } from "next/font/google";

// Styles
// ---------------
import "@/style/reset.css";
import "@/style/globals.css";

// Meta
// ---------------
export const metadata = {
  title: "Shopping",
  description: "",
};

// Inter Font
// ---------------
const inter = Inter({ subsets: ["latin"] });

// Main
// ---------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
