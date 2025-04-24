import { Form } from '#islands/form.tsx'
import { createRoute } from 'honox/factory'

export default createRoute((context, _next) => {
  return context.render(
    <main class="uppercase space-y-8 w-full">
      <Form />
    </main>,
  )
})
