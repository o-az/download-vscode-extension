import { Form } from '#islands/form.tsx'
import { createRoute } from 'honox/factory'

export default createRoute((context, _next) => {
  return context.render(
    <main class='uppercase space-y-8 w-full'>
      <h1 class='text-center text-xl font-bold'>VSCode Extension Downloader</h1>
      <Form />
      <div class='text-center text-pretty mt-10'>
        <ul class='list-decimal list-inside *:text-left'>
          <li>
            Copy URL from{' '}
            <a
              href='https://marketplace.visualstudio.com'
              target='_blank'
              rel='noreferrer'>
              VS Extensions Marketplace
            </a>{' '}
          </li>
          <li>paste it in the above input field</li>
          <li>Click download</li>
          <li>
            drag the downloaded{' '}
            <span class='font-mono bg-gray-100 px-1 rounded-md font-semibold text-lg'>.visx</span>{' '}
            to the extensions view in Cursor/Windsurf/VSCode.
          </li>
        </ul>
      </div>
    </main>
  )
})
