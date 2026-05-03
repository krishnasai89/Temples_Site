import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the new Footer
import "./globals.css";

export const metadata = {
  title: "Vishwaguru | Divine Temples",
  description: "Discover the Divine Forms of Ancient Temples",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
