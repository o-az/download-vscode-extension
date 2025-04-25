import { Form } from '#islands/form.tsx'
import { createRoute } from 'honox/factory'

export default createRoute((context, _next) => {
  return context.render(
    <main class="uppercase space-y-8 w-full">
      <h1 class="text-center text-2xl font-bold">VSCode Extension Downloader</h1>
      <Form />
      <div class="text-center text-pretty mt-10">
        <ol>
          <li>
            Copy an extension URL from{' '}
            <a href="https://marketplace.visualstudio.com" target="_blank" rel="noreferrer">
              Visual Studio Extensions Marketplace
            </a>{' '}
            and paste it here to download the extension
          </li>
          <li>
            Then drag the{' '}
            <span class="font-mono bg-gray-100 px-1 rounded-md font-semibold text-lg">.visx</span>{' '}
            and drop on the extensions view in Cursor / Windsurf / VSCode.
          </li>
        </ol>
      </div>
    </main>,
  )
})
