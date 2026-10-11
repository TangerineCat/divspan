/// <reference types="vite/client" />

import Card from './Card'
import { CardType, DescriptionType } from './card_config'
import type { CardConfig } from './card_config'
import './App.scss'
import { CardVisual } from './Visuals';

const divs: CardConfig[] = [
    {
    type: CardType.DIV,
    name: 'card',
    visual: 
      (<CardVisual />),
    description: [
      'This card scores ',
      { text: '3', type: DescriptionType.NUMBER },
      ' points if it contains ',
      { text: '1 ', type: DescriptionType.NUMBER },
      { text: 'img', type: DescriptionType.TAG },
      ' and at least ',
      { text: '2 ', type: DescriptionType.NUMBER },
      { text: 'text', type: DescriptionType.TAG },
      ' elements.',
    ],
    flavorText: 'I see we\'re going meta...',
  },
];

const scripts: CardConfig[] = [
    {
    type: CardType.SCRIPT,
    name: 'score',
    description: [{ text: '3', type: DescriptionType.NUMBER }],
    flavorText: 'JavaScript adds behavior to a page.',
  },
];

const spans: CardConfig[] = [
  {
    type: CardType.SPAN,
    name: 'strong',
    description: [
      'Divs with a ',
      { text: 'strong', type: DescriptionType.TAG },
      ' cannot be affected by scripts.',
    ],
    flavorText: 'An inline element for a small piece of content.',
    useClosingTag: true,
    visual: (<strong>I AM DAUNTLESS!!!</strong>),
  },
  {
    type: CardType.SPAN,
    name: 'em',
    description: [
      'After adding this card to a div, you may add ',
      { text: '1', type: DescriptionType.NUMBER },
      ' additional ',
      { text: 'span', type: DescriptionType.TAG },
      ' this turn.',
    ],
    flavorText: 'An inline element for emphasized text.',
    useClosingTag: true,
    visual: (<em>To be </em>),
  },
];

const inputs: CardConfig[] = [
  {
    type: CardType.INPUT,
    name: 'text',
    visual: (<input type="text" placeholder="Enter your password..." />),
    description: [],
    flavorText: 'A form control that accepts user input.',
  },
  {
    type: CardType.INPUT,
    name: 'checkbox',
    visual: (<input type="checkbox" />),
    description: [],
    flavorText: 'A form control that allows the user to select one or more options.',
  },
  {
    type: CardType.INPUT,
    name: 'radio',
    visual: (<input type="radio" />),
    description: [],
    flavorText: 'A form control that allows the user to select only one option.',
  },
];

const cards: CardConfig[] = [
  ...divs,
  ...scripts,
  ...spans,
  ...inputs,
];

function App() {
  return (
    <main className="app">
      <h1>Theme cards</h1>
      <div className="card-gallery" aria-label="Theme card gallery">
        {cards.map((config) => (
          <Card config={config} key={config.type} />
        ))}
      </div>
    </main>
  )
}

export default App
