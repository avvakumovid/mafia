import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='theme-color' content='#181818' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#181818' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#181818' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon.png'></link>
        <meta name='theme-color' content='#fff' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
