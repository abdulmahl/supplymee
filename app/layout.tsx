import "./globals.css";
import Footer from "./partials/footer";
import Header from "./partials/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
