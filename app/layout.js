import "../styles/globals.css";

export const metadata = {
  title: "Zorivo — Sarrah Bharmal",
  description: "Digital Innovation Studio - Contact Sarrah Bharmal",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
