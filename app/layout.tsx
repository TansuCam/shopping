"use client";
// Next.js
// ---------------
import { Inter } from "next/font/google";

// Redux Toolkit
// ---------------
import { Provider } from "react-redux";
import store from "@/store";

// Styles
// ---------------
import "@/style/reset.css";
import "@/style/globals.css";

// Components
// ---------------
import Header from "@/components/header";
import AuthProvider from "@/components/AuthProvider";

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
        <Provider store={store}>
          <AuthProvider>
            <Header />
            <main>{children}</main>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
