import { cors } from 'hono/cors'
import { csrf } from 'hono/csrf'
import { logger } from 'hono/logger'
import { showRoutes } from 'hono/dev'
import { timeout } from 'hono/timeout'
import type { Env } from '#global.d.ts'
import { createApp } from 'honox/server'
import { requestId } from 'hono/request-id'
import { prettyJSON } from 'hono/pretty-json'
import { getConnInfo } from 'hono/cloudflare-workers'

const app = createApp<{ Bindings: Env }>()

app.use(csrf())
app.use(logger())
app.use(timeout(4_000))
app.use(prettyJSON({ space: 2 }))
app.use(requestId({ headerName: 'code-extension-downloader-Request-Id' }))
app.use(cors({ origin: '*', allowMethods: ['GET', 'OPTIONS', 'POST', 'HEAD'] }))

app.get('/ping', (context) => context.text('pong', 200))

app.onError((error, context) => {
  const { remote } = getConnInfo(context)
  const requestId = context.get('requestId')
  console.error(
    [`[${requestId}]`, `-[${remote.address}]`, `-[${context.req.url}]:\n`, `${error.message}`].join(
      '',
    ),
  )
  return context.json({ error: error.message }, 500)
})

showRoutes(app)

export default app
