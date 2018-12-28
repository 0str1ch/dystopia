import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Meta from '../components/Meta';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <Meta />
          <link
            href="../static/favicon.ico"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="jeremy smith" />
          <meta name="apple-mobile-web-app-title" content="jeremy smith" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-navbutton-color" content="#000000" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
