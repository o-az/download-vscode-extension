import { Form } from '#islands/form.tsx'
import { createRoute } from 'honox/factory'

export default createRoute((context, _next) => {
  return context.render(
    <main class="uppercase space-y-8 w-full">
      <Form />
      <div class="text-center text-pretty">
        <p>
          Copy an extension URL from Microsoft Marketplace and paste it here to download the
          extension. Then drag the `.visx` and drop on the extensions view in Cursor / Windsurf /
          VSCode.
        </p>
      </div>
    </main>,
  )
})
