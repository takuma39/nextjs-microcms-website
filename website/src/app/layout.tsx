import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs-microcms-website-nu.vercel.app/'),
  title: {
    template: '%s | シンプルなコーポレートサイト',
    default: 'シンプルなコーポレートサイト',
  },
  description:
    '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
  openGraph: {
    title: 'シンプルなコーポレートサイト',
    description:
      '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://nextjs-microcms-website-nu.vercel.app/',
  },
};
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
