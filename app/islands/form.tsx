/**
 * Input URL format:
 * https://marketplace.visualstudio.com/items?itemName=keksiqc.idx-monospace-theme
 *
 * download URL format:
 * https://marketplace.visualstudio.com/_apis/public/gallery/publishers/<publisher>/vsextensions/<extension>/<version>/vspackage
 */

async function fetchExtensionMetadata(url: string) {
  const abortController = new AbortController()

  const extensionAuthorAndName = url.split('?itemName=').pop()
  if (!extensionAuthorAndName) throw new Error('Invalid URL')

  const response = await fetch(
    'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
    {
      method: 'POST',
      signal: abortController.signal,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json;api-version=3.0-preview.1',
      },
      body: JSON.stringify({
        filters: [
          {
            criteria: [{ filterType: 7, value: extensionAuthorAndName }],
          },
        ],
        flags: 23,
      }),
    },
  )

  const data = (await response.json()) as CodeExtensionResponse
  const [extension] = data?.results?.at(0)?.extensions ?? []

  const extensionName = extension?.extensionName
  const version = extension?.versions?.at(0)?.version
  const publisher = extension?.publisher?.publisherName
  return { extension: extensionName, version, publisher }
}

export function Form() {
  async function handleSubmit(formData: FormData) {
    const url = formData.get('url')
    if (typeof url !== 'string' || !URL.canParse(url)) return

    const { extension, publisher, version } = await fetchExtensionMetadata(url)
    if (!publisher || !extension || !version) return

    const downloadUrl = `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${publisher}/vsextensions/${extension}/${version}/vspackage`

    const downloadAnchor = document.createElement('a', { is: 'download' })
    Object.assign(downloadAnchor, {
      href: downloadUrl,
      download: `${publisher}.${extension}-${version}.vsix`,
    })
    downloadAnchor.click()
    downloadAnchor.remove()
    URL.revokeObjectURL(downloadUrl)
  }

  return (
    <form action={handleSubmit} class="flex items-center w-full justify-center flex-col gap-5">
      <fieldset class="w-full flex flex-col gap-5 items-center justify-center">
        <legend class="mb-5 sr-only">VSCode Marketplace Downloader form</legend>
        <br />
        <p class="w-full">
          <input
            id="url"
            type="url"
            name="url"
            class="bg-gray-100 rounded-md py-1 w-full text-black text-sm h-14 px-3"
            placeholder="https://marketplace.visualstudio.com/items?itemName=vscode-extension-marketplace-downloader.vscode-extension-marketplace-downloader"
          />
          <label for="url" class="sr-only">
            URL
          </label>
        </p>
        <button
          type="submit"
          class="mb-10 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-zinc-200 px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
        >
          Download
        </button>
      </fieldset>
    </form>
  )
}

interface CodeExtensionResponse {
  results: Array<{
    flags: string
    extensions: Array<{
      publisher: {
        domain: string
        publisherId: string
        displayName: string
        publisherName: string
      }
      extensionId: string
      displayName: string
      lastUpdated: string
      extensionName: string
      shortDescription: string
      categories: Array<string>
      versions: Array<{
        version: string
        flags: string
        assetUri: string
        lastUpdated: string
        fallbackAssetUri: string
        properties: Array<{ key: string; value: string }>
        files: Array<{ assetType: string; source: string }>
      }>
    }>
  }>
}
