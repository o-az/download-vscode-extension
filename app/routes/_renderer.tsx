import { Style } from 'hono/css'
import { Link, Script } from 'honox/server'
import { jsxRenderer } from 'hono/jsx-renderer'

export default jsxRenderer(({ children, Layout: _ }, context) => {
  return (
    <html
      lang='en'
      class='font-mono dark dark:bg-[#111111] dark:text-white'>
      <head>
        <meta charset='UTF-8' />
        <title>VSCode Extensions in Curaor</title>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🌩</text></svg>'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://unpkg.com/nes.css@latest/css/nes.min.css'
          rel='stylesheet'
        />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no'
        />
        <meta
          name='description'
          content='Bring any VSCode extension to Curaor, no limits'
        />
        <meta
          name='x-app-version'
          content={context.env.COMMIT_SHA}
        />
        <Link
          rel='stylesheet'
          href='/app/style.css'
        />
        <Script
          async
          src='/app/client.ts'
          nonce={context.get('secureHeadersNonce')}
        />
        <Style />
      </head>
      <body class='m-0 dark:text-stone-50 flex flex-col justify-between items-center antialiased'>
        <article class='max-w-3xl sm:m-4 sm:p-4 m-2 p-2'>{children}</article>
        <footer class='text-center text-sm absolute bottom-0 pb-2'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/o-az/download-vscode-extension'>
            github.com/o-az/download-vscode-extension
          </a>
        </footer>
      </body>
    </html>
  )
})
