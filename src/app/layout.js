import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Inside out window coverings",
  description:
    "Inside out window coverings is a small business that sells different kinds of window coverings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="qg9ONxKPQnyyxycD3XphiFfNA9kPU2mcK9QoUxuPM3M"
        />
      </head>
      <body className={poppins.className + " relative"}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
