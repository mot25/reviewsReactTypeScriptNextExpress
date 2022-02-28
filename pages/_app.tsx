import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
  <Head>
    <title>My App Top on Next js</title>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp;
  