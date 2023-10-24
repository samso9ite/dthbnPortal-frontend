import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_URL+'./dist/css/app.css'} />
        <link href={process.env.PUBLIC_URL+'./dist/images/logo.svg'} rel="shortcut icon" />
        <link href="https://cdn.jsdelivr.net/npm/@tailwindcss/custom-forms@0.2.1/dist/custom-forms.css" rel="stylesheet"></link>
      </Head>
      <body  className="py-5" style={{backgroundColor: '#280742'}}>
        <Main />
        <NextScript />
        <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
        <script src={process.env.NEXT_PUBLIC_URL+'./dist/js/app.js'}></script>
      </body>
    </Html>
  )
}
