import { CardType, DescriptionType } from './card_config'
import type { CardConfig } from './card_config'
import { LinebreakVisual, MarqueeVisual } from './Visuals'

export const spans: CardConfig[] = [
  {
    type: CardType.SPAN,
    name: 'strong',
    description: [
      'Divs with a ',
      { text: 'strong', type: DescriptionType.TAG },
      ' cannot be affected by scripts.',
    ],
    flavorText: 'Back in my day we used to call this bold!',
    useClosingTag: true,
    visual: <strong>NONE SHALL PASS!!!</strong>,
  },
  {
    type: CardType.SPAN,
    name: 'em',
    visual: <em>As per my last email</em>,
    description: [
      'After adding this card to a div, you may add ',
      { text: '1', type: DescriptionType.NUMBER },
      ' additional ',
      { text: 'span', type: DescriptionType.TAG },
      ' this turn.',
    ],
    flavorText: 'Once you go italics, you never go back.',
    useClosingTag: true,
  },
  {
    type: CardType.SPAN,
    name: 'code',
    description: [
      'After adding this card to a div, you may add ',
      { text: '1', type: DescriptionType.NUMBER },
      ' additional ',
      { text: 'span', type: DescriptionType.TAG },
      ' this turn.',
    ],
    flavorText: 'Only hackermans use this tag!',
    useClosingTag: true,
    visual: <code>console.log("Hello, World!");</code>,
  },
  {
    type: CardType.SPAN,
    name: 'a',
    description: [
      'After adding this tag to a div, you may draw ',
      { text: '1', type: DescriptionType.NUMBER },
      ' additional ',
      { text: 'span', type: DescriptionType.TAG },
      '.'],
    flavorText: 'Well that\'s a risky click...',
    useClosingTag: true,
    visual: <a href="https://www.divspan.com">Click me!</a>,
  },
  {
    type: CardType.SPAN,
    name: 'img',
    description: [],
    flavorText: 'The internet was made to post cat photos after all.',
    useClosingTag: false,
    visual: <img src="/Youtiao.png" alt="Youtiao" />,
  },
  {
    type: CardType.SPAN,
    name: 'img',
    visual: <img src="/pidan.png" alt="Youtiao" />,
    description: [],
    flavorText: 'The internet was made to post cat photos after all.',
    useClosingTag: false,
  },
  {
    type: CardType.SPAN,
    name: 'button',
    visual: <button>Submit form</button>,
    description: [],
    flavorText: 'Bop it!',
    useClosingTag: true,
  },
  {
    type: CardType.SPAN,
    name: 'br',
    visual: <LinebreakVisual />,
    description: ['When you add this card to a ',
      { text: 'div', type: DescriptionType.TAG },
      ' the next player skips their turn.'],
    flavorText: 'You\'re completely out of line!',
    useClosingTag: false,
  },
  {
    type: CardType.SPAN,
    name: 'marquee',
    visual: <MarqueeVisual />,
    description: [
      'When a div contains this card scores, it scores ',
      { text: '1', type: DescriptionType.NUMBER },
      ' additional point.',
    ],
    flavorText: 'Weeeeeeeeeeeeeeeee!.',
    useClosingTag: true,
  },
]

export const inputs: CardConfig[] = [
  {
    type: CardType.INPUT,
    name: 'text',
    visual: <input type="text" placeholder="Enter your password..." />,
    description: [],
    flavorText: 'Must contain at least 8 characters, '
      + 'an element on the periodic table, '
      + 'and yesterday\'s Wordle answer.',
  },
  {
    type: CardType.INPUT,
    name: 'checkbox',
    visual: <input type="checkbox" />,
    description: [],
    flavorText:
      'Yes, you can click all of them.',
  },
  {
    type: CardType.INPUT,
    name: 'radio',
    visual: <input type="radio" />,
    description: [],
    flavorText: 'There can only be one!',
  },
]
