import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Sidebar from "/src/app/Sidebar/Sidebar.jsx";

const pixelify = Press_Start_2P({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Jimini",
  description: "Welcome to the Jimini Universe. Your all in one enterprise ready productivity assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pixelify.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
