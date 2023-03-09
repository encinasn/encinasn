import "./globals.css";

import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Encinas Nahuel",
  description: "Frontend Developer",
  keywords: ["frontend, developer, react, front"],
  themeColor: "#131313",
  colorScheme: "dark",
  creator: "Encinas Nahuel",
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("bg-[#131313] font-sans text-white", poppins.variable)}
      >
        {children}
      </body>
    </html>
  );
}
