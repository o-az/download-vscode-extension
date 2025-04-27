import type {} from 'hono'

interface Env {
  readonly COMMIT_SHA: string
  readonly ENVIRONMENT: string
}

declare module 'hono' {}
