import { Html, Head, Main, NextScript } from 'next/document'
// set the font to dos.ttf


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* background.png */}
      <body className='bg-[url("/background.png")]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
