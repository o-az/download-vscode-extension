# VSCode Extension Downloader

## Get started

install dependencies

```sh
# upgrade bun first if you haven't in a while
bun upgrade

# install dependencies
bun install
```

dev

```sh
bun --bun vite --port 4200 --open
```

build

```sh
bun --bun vite build --mode client
bun --bun vite build
```

preview

```sh
bun x wrangler pages dev dist
```

deploy

```sh
bun x wrangler pages deploy dist --project-name='honox-mdx-islands'
```
