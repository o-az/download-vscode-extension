# VSCode Extension Downloader

<p align="center">
<a href="https://visx.evm.workers.dev" target="_blank" rel="noopener noreferrer" style="font-size: 1.5rem; font-weight: bold;">visx.evm.workers.dev</a>
</p>

___

This site lets you download a Code extension by pasting the extension URL from MSFT Marketplace.

https://github.com/user-attachments/assets/424ba4a6-1f8e-4f2e-84e1-53478d9b8073

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
