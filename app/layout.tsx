import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "One-Flow Rent Agreement Registration", description: "An independent hackathon prototype for a simpler rent agreement registration journey." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
