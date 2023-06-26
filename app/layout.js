import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
      <html>
        <head />
        <body className="">
          {children}
          <script src="../scroll-out.js"></script>
        </body>
      </html>
  );
}
