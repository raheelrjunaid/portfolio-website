import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Raheel Junaid</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <div
        className="text-white min-h-screen"
        style={{ backgroundColor: "#000C13" }}
      >
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
