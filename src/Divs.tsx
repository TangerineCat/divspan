import { CardType, DescriptionType } from './card_config'
import type { CardConfig } from './card_config'
import {
  CardVisual,
  ContainerContainerVisual,
  MiniDialogVisual,
  MiniFormVisual,
  MiniOrderedListVisual,
  MiniUnorderedListVisual,
} from './Visuals'

export const divs: CardConfig[] = [
  {
    type: CardType.DIV,
    name: 'card',
    visual: <CardVisual />,
    description: [
      'This card scores ',
      { text: '3', type: DescriptionType.NUMBER },
      ' points if it contains ',
      { text: '1 ', type: DescriptionType.NUMBER },
      { text: 'img', type: DescriptionType.TAG },
      ' and at least ',
      { text: '2 ', type: DescriptionType.NUMBER },
      ' other elements.',
    ],
    flavorText: "I see we're going meta...",
  },
  {
    type: CardType.DIV,
    name: 'div-container',
    visual: <ContainerContainerVisual />,
    description: [
      'This card scores ',
      { text: '2', type: DescriptionType.NUMBER },
      ' points for each completed ',
      { text: 'div', type: DescriptionType.TAG },
      ' within it.',
    ],
    flavorText: 'Yo dawg, I heard you like containers.',
  },
  {
    type: CardType.DIV,
    name: 'form',
    visual: <MiniFormVisual />,
    description: [
      'This card scores ',
      { text: '1', type: DescriptionType.NUMBER },
      ' point for each ',
      { text: 'input', type: DescriptionType.TAG },
      ' element within it.',
    ],
    flavorText: 'Your opinion is valuable to us.',
  },
  {
    type: CardType.DIV,
    name: 'unordered-list',
    visual: <MiniUnorderedListVisual />,
    description: [
      'This card scores ',
      { text: '1', type: DescriptionType.NUMBER },
      ' point for each ',
      { text: 'span', type: DescriptionType.TAG },
      '. This card does not score if it contains any duplicate ',
      { text: 'spans', type: DescriptionType.TAG },
      '.'
    ],
    flavorText: 'Random bullshit go!',
  },
  {
    type: CardType.DIV,
    name: 'ordered-list',
    visual: <MiniOrderedListVisual />,
    description: [
      'This card scores ',
      { text: '1', type: DescriptionType.NUMBER },
      ' point for each ',
      { text: 'span', type: DescriptionType.TAG },
      '. This card does not score if it contains more than ',
      { text: '1', type: DescriptionType.NUMBER },
      ' type of ',
      { text: 'span', type: DescriptionType.TAG },
      '.',
    ],
    flavorText: 'It\'s like a starship full of stormtroopers!',
  },
  {
    type: CardType.DIV,
    name: 'dialog',
    visual: <MiniDialogVisual />,
    description: [
      'This card scores ',
      {text: '3', type: DescriptionType.NUMBER},
      ' points if it contains at least ',
      {text: '1', type: DescriptionType.NUMBER},
      {text: ' button', type: DescriptionType.TAG},
      ' and ',
      {text: '2', type: DescriptionType.NUMBER},
      ' other elements.',
    ],
    flavorText: 'Are you SURE you want to leave this page?',
  },
]

export const scripts: CardConfig[] = [
  {
    type: CardType.SCRIPT,
    name: 'score',
    description: [{ text: '3', type: DescriptionType.NUMBER }],
    flavorText: 'JavaScript adds behavior to a page.',
  },
]
