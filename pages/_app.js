import { AppShell, MantineProvider } from "@mantine/core";
import Head from "next/head";
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

      <MantineProvider
        theme={{
          colorScheme: "dark",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell header={<Header />}>
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}

export default MyApp;
