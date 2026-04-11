import { AppProps } from "next/app";
import "../src/styles/global.css";
import { firaSans } from "../src/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={firaSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
