/// <reference types="vite/client" />

import { useRef, useState } from 'react'
import { toBlob } from 'html-to-image'
import JSZip from 'jszip'
import { setPngPhysicalSize } from './png_metadata'
import Card, { DivCover, SpanCover } from './Card'
import { CardType } from './card_config'
import type { CardConfig } from './card_config'
import './App.scss'
import { divs, scripts } from './Divs'
import { inputs, spans } from './Spans'

const cards: CardConfig[] = [
  ...divs,
  ...scripts,
  ...spans,
  ...inputs,
  {
    type: CardType.DIV_COVER,
    name: "DivCover",
    description: [],
  },
    {
    type: CardType.SPAN_COVER,
    name: "SpanCover",
    description: [],
  }
];

function App() {
  const [lightMode, setLightMode] = useState(false)
  const [showCardCopies, setShowCardCopies] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [exportError, setExportError] = useState<string | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const displayedCards = showCardCopies
    ? cards.flatMap((config) =>
        Array.from({ length: config.count ?? 1 }, () => config),
      )
    : cards

  async function exportCards() {
    setIsExporting(true)
    setExportError(null)

    try {
      const gallery = galleryRef.current
      if (!gallery) {
        throw new Error('The card gallery is not available.')
      }

      const cardElements = Array.from(
        gallery.querySelectorAll<HTMLElement>(':scope > .card'),
      )
      if (cardElements.length !== displayedCards.length) {
        throw new Error('Could not find every card in the gallery.')
      }

      const zip = new JSZip()
      for (const [index, cardElement] of cardElements.entries()) {
        const renderedImage = await toBlob(cardElement, { pixelRatio: 4 })
        if (!renderedImage) {
          throw new Error(`Could not render card ${index + 1} as an image.`)
        }
        const image = await setPngPhysicalSize(renderedImage, 2.5, 3.5)

        const config = displayedCards[index]
        const cardName = `${config.type}-${config.name}`.replace(
          /[^\w-]+/g,
          '-',
        )
        const sequence = String(index + 1).padStart(2, '0')
        zip.file(`${sequence}-${cardName}.png`, image)
      }

      const archive = await zip.generateAsync({ type: 'blob' })
      const downloadUrl = URL.createObjectURL(archive)
      const downloadLink = document.createElement('a')
      downloadLink.href = downloadUrl
      downloadLink.download = 'theme-cards.zip'
      downloadLink.click()
      URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      setExportError(
        error instanceof Error
          ? `Could not export cards: ${error.message}`
          : 'Could not export cards due to an unexpected error.',
      )
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <main className={`app${lightMode ? ' light-mode' : ''}`}>
      <header className="app-header">
        <h1>DivSpan cards</h1>
        <button
          aria-pressed={lightMode}
          className="theme-toggle"
          onClick={() => setLightMode((current) => !current)}
          type="button"
        >
          {lightMode ? 'Use dark mode' : 'Use light mode'}
        </button>
        <button
          aria-pressed={showCardCopies}
          className="copy-count-toggle"
          onClick={() => setShowCardCopies((current) => !current)}
          type="button"
        >
          Show card copies
        </button>
        <button
          className="export-cards-button"
          disabled={isExporting}
          onClick={exportCards}
          type="button"
        >
          {isExporting ? 'Exporting...' : 'Export cards'}
        </button>
      </header>
      {exportError && (
        <p className="export-error" role="alert">
          {exportError}
        </p>
      )}
      <div
        className="card-gallery"
        aria-label="Theme card gallery"
        ref={galleryRef}
      >
        {displayedCards.map((config, index) => (
          <Card
            config={config}
            key={`${config.type}-${config.name}-${index}`}
          />
        ))}
      </div>
    </main>
  )
}

export default App
