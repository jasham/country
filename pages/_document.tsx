import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-nunito bg-veryLightGrayLMB dark:bg-darkBlueDMElem min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
