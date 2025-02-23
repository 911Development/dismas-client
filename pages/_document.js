import { Html, Head, Main, NextScript } from "next/document";
import SplashScreen from "./SplashScreen";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <div id="sidebar-backdrop"></div>
      </body>
    </Html>
  );
}
