import "../styles/globals.css";
import Navigation from "../components/Layout/Navigation";
import Footer from "../components/Layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
