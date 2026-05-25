function drawCircularFavicon(image: HTMLImageElement, size: number): string {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return image.src

  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.closePath()
  ctx.clip()

  const scale = Math.max(size / image.width, size / image.height)
  const w = image.width * scale
  const h = image.height * scale
  const x = (size - w) / 2
  const y = (size - h) / 2
  ctx.drawImage(image, x, y, w, h)

  return canvas.toDataURL('image/png')
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Failed to load favicon image'))
    img.src = src
  })
}

function upsertLink(rel: string, href: string, sizes?: string, type = 'image/png') {
  let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.rel = rel
    document.head.appendChild(link)
  }
  link.type = type
  link.href = href
  if (sizes) link.sizes = sizes
  else link.removeAttribute('sizes')
}

/** Renders a circular-cropped PNG favicon from a Vite asset URL. */
export async function setFavicon(imageUrl: string) {
  const image = await loadImage(imageUrl)

  const icon32 = drawCircularFavicon(image, 32)
  const icon180 = drawCircularFavicon(image, 180)

  upsertLink('icon', icon32, '32x32')
  upsertLink('apple-touch-icon', icon180, '180x180')
}
