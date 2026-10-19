const PNG_SIGNATURE = [137, 80, 78, 71, 13, 10, 26, 10]

function createPhysicalDimensionsChunk(
  pixelsPerMeterX: number,
  pixelsPerMeterY: number,
): Uint8Array {
  const chunk = new Uint8Array(21)
  const view = new DataView(chunk.buffer)
  view.setUint32(0, 9)
  chunk.set([112, 72, 89, 115], 4)
  view.setUint32(8, pixelsPerMeterX)
  view.setUint32(12, pixelsPerMeterY)
  chunk[16] = 1
  view.setUint32(17, crc32(chunk.subarray(4, 17)))
  return chunk
}

function crc32(bytes: Uint8Array): number {
  let crc = 0xffffffff

  for (const byte of bytes) {
    crc ^= byte
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0)
    }
  }

  return (crc ^ 0xffffffff) >>> 0
}

export async function setPngPhysicalSize(
  image: Blob,
  widthInches: number,
  heightInches: number,
): Promise<Blob> {
  const bytes = new Uint8Array(await image.arrayBuffer())
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)

  if (
    bytes.length < PNG_SIGNATURE.length ||
    !PNG_SIGNATURE.every((value, index) => bytes[index] === value)
  ) {
    throw new Error('The generated image is not a valid PNG.')
  }

  let width = 0
  let height = 0
  let offset = PNG_SIGNATURE.length
  let foundImageData = false
  const chunks: Uint8Array[] = [bytes.subarray(0, PNG_SIGNATURE.length)]

  while (offset < bytes.length) {
    if (offset + 12 > bytes.length) {
      throw new Error('The generated PNG contains an incomplete chunk.')
    }

    const chunkLength = view.getUint32(offset)
    const chunkEnd = offset + 12 + chunkLength
    if (chunkEnd > bytes.length) {
      throw new Error('The generated PNG contains an incomplete chunk.')
    }

    const chunkType = String.fromCharCode(
      bytes[offset + 4],
      bytes[offset + 5],
      bytes[offset + 6],
      bytes[offset + 7],
    )

    if (chunkType === 'IHDR') {
      if (chunkLength !== 13) {
        throw new Error('The generated PNG has an invalid header.')
      }
      width = view.getUint32(offset + 8)
      height = view.getUint32(offset + 12)
    }

    if (chunkType === 'IDAT' && !foundImageData) {
      const pixelsPerMeterX = Math.round(width / widthInches / 0.0254)
      const pixelsPerMeterY = Math.round(height / heightInches / 0.0254)
      chunks.push(
        createPhysicalDimensionsChunk(pixelsPerMeterX, pixelsPerMeterY),
      )
      foundImageData = true
    }

    if (chunkType !== 'pHYs') {
      chunks.push(bytes.subarray(offset, chunkEnd))
    }

    offset = chunkEnd
  }

  if (width === 0 || height === 0 || !foundImageData) {
    throw new Error('The generated PNG is missing image dimensions or data.')
  }

  const outputLength = chunks.reduce((total, chunk) => total + chunk.length, 0)
  const output = new Uint8Array(outputLength)
  let outputOffset = 0
  for (const chunk of chunks) {
    output.set(chunk, outputOffset)
    outputOffset += chunk.length
  }

  return new Blob([output], { type: 'image/png' })
}
