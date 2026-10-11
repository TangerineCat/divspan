/// <reference types="vite/client" />

import { useState } from 'react'
import Card from './Card'
import type { CardConfig } from './card_config'
import './App.scss'
import { divs, scripts } from './Divs'
import { inputs, spans } from './Spans'

const cards: CardConfig[] = [
  ...divs,
  ...scripts,
  ...spans,
  ...inputs,
];

function App() {
  const [lightMode, setLightMode] = useState(false)

  return (
    <main className={`app${lightMode ? ' light-mode' : ''}`}>
      <header className="app-header">
        <h1>Theme cards</h1>
        <button
          aria-pressed={lightMode}
          className="theme-toggle"
          onClick={() => setLightMode((current) => !current)}
          type="button"
        >
          {lightMode ? 'Use dark mode' : 'Use light mode'}
        </button>
      </header>
      <div className="card-gallery" aria-label="Theme card gallery">
        {cards.map((config) => (
          <Card config={config} key={`${config.type}-${config.name}`} />
        ))}
      </div>
    </main>
  )
}

export default App
