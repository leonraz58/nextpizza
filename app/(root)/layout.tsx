import type { Metadata } from "next";
import {Header} from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Next Pizza | Главная",
  description: "Next Pizza description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className={'min-h-screen'}>
          <Header/>
        {children}
      </main>
  );
}
