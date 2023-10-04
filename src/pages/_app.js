import Nav from "@/component/layout/nav";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
