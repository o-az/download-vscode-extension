# VSCode Extension Downloader

<p align="center">
<a href="https://visx.evm.workers.dev" target="_blank" rel="noopener noreferrer" style="font-size: 1.5rem; font-weight: bold;">visx.evm.workers.dev</a>
</p>

___

This site lets you download a Code extension by pasting the extension URL from MSFT Marketplace.

<div align="center">
<video src="./.github/demo.mp4" controls width="100%" height="100%" autoplay loop muted />
</div>

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
