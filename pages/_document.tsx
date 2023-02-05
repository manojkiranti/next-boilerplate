import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Javascript Developer" />
        <meta name="keywords" content="Javascript Developer" />
      </Head>
      <body className="bg-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
