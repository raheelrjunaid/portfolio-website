import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "c191xd5qiw");
          `,
        }}
      />

      <Head>
        <title>Raheel Junaid</title>
        <meta
          name="description"
          content="I'm a software engineer that empowers users by developing applications. My apps/websites use full-stack web technologies to enhance the user experience with minimal pain points."
        />
        <meta
          name="keywords"
          content="Software Developer, Web Developer, Portfolio"
        />
        <meta name="author" content="Raheel Junaid" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      {/* <AnimatedCursor color="14, 165, 233" /> */}
      <div className="text-white min-h-screen bg-[#000C13]">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
