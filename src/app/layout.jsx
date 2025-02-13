import "the-new-css-reset/css/reset.css";
import { Manrope, Playfair_Display, Noto_Sans_KR } from "next/font/google";

import "./styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

const playfairdisplay = Playfair_Display({
  subsets: ["latin"],
});

const notosanskr = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata = {
  title: "My Rocher",
  description: "나만의 커스텀 로쉐을 만들고 그 분을 향한 마음을 테스트해보세요",
  keywords: "my rocher, 마이로쉐, 발렌타인데이, 커스텀 초콜릿",
  icons: {
    icon: "https://my-valentine-pied.vercel.app/favicon.png",
    shortcut: "https://my-valentine-pied.vercel.app/favicon.png",
    apple: "https://my-valentine-pied.vercel.app/favicon.png",
  },
  openGraph: {
    title: "My Rocher",
    description:
      "나만의 커스텀 로쉐을 만들고 그 분을 향한 마음을 테스트해보세요.",
    images: "https://my-valentine-pied.vercel.app/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${playfairdisplay.className} ${notosanskr.className}`}
      >
        {children}
      </body>
    </html>
  );
}
