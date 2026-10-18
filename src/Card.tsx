import { CardType, DescriptionType } from './card_config'
import type { CardConfig, DescriptionContent } from './card_config'
import type { ComponentType } from 'react'
import './Card.scss'

interface CardProps {
  config: CardConfig
}

const cardComponents: Record<CardType, ComponentType<CardProps>> = {
  [CardType.DIV]: DivCard,
  [CardType.SPAN]: SpanCard,
  [CardType.INPUT]: InputCard,
  [CardType.SCRIPT]: ScriptCard,
  [CardType.DIV_COVER]: DivCover,
  [CardType.SPAN_COVER]: SpanCover,
}

function Card({ config }: CardProps) {
  const Component = cardComponents[config.type]

  if (!Component) {
    throw new Error(`Unknown card type "${String(config.type)}".`)
  }

  return <Component config={config} />
}

function Description({ parts }: { parts: DescriptionContent[] }) {
  return parts.map((part, index) => {
    if (typeof part === 'string') {
      return part
    }

    if (typeof part === 'number') {
      return (
        <span className="card-number" key={index}>
          {part}
        </span>
      )
    }

    let className: string | undefined

    switch (part.type) {
      case DescriptionType.NUMBER:
        className = 'card-number'
        break
      case DescriptionType.TAG:
        className = 'card-tag'
        break
      case DescriptionType.KEYWORD:
        className = 'card-keyword'
        break
      case DescriptionType.SCRIPT:
        className = 'card-script-tag'
        break
      default:
        break
    }

    return className ? (
      <span className={className} key={index}>
        {part.text}
      </span>
    ) : (
      part.text
    )
  })
}

function CardFooter({ config }: CardProps) {
  const count = config.countDisplay ?? config.count ?? 0
  const dotCount = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0

  if (dotCount === 0) {
    return null
  }

  return (
    <div
      aria-label={`${dotCount} card copies`}
      className="card-count-dots"
      role="img"
    >
      {Array.from({ length: dotCount }, (_, index) => (
        <span aria-hidden="true" key={index}>·</span>
      ))}
    </div>
  )
}

function DivCard({ config }: CardProps) {
  return (
    <article aria-label={`${config.name} div card`} className="card night-owl">
      <div className="card-suit">
        <span className="card-tag-punctuation">&lt;</span>
        <span className="card-tag">div</span>&nbsp;
        <span className="card-attr">class</span>
        <span className="card-punctuation">=</span>
      </div>
      <div className="card-title">
        <span className="card-string-punctuation">&quot;</span>
        <span className="card-string">{config.name}</span>
        <span className="card-string-punctuation">&quot;</span>
      </div>
      <div className="card-center">
        <div>
          {config.visual && (
            <div className="card-visual">{config.visual}</div>
          )}
        </div>
      </div>
      <div className="card-description">
        <Description parts={config.description} />
      </div>
      <div className="card-suit">
        <span className="card-tag-punctuation">&gt;</span>
      </div>
      <CardFooter config={config} />
      {config.flavorText && (
        <div className="card-comment">
          <span>&lt;!--</span>
          <span>{config.flavorText}</span>
          <span>--&gt;</span>
        </div>
      )}
    </article>
  )
}

function SpanCard({ config }: CardProps) {
  return (
    <article aria-label={`${config.name} span card`} className="card dracula">
      <div className="card-header">
        <div className="card-suit">
          <span className="card-tag-punctuation">&lt;</span>
          <span className="card-tag">{config.name}</span>
          {config.useClosingTag && (<span className="card-tag-punctuation">&gt;</span>)}
        </div>
        {config.text && (<div className="text-indicator">T</div>)}
      </div>
      <div className="card-center">
        <div>
          {config.visual && (
            <div className="card-visual">{config.visual}</div>
          )}
        </div>
      </div>
      <div className="card-description">
        <Description parts={config.description} />
      </div>
      <div className="card-suit">

        {config.useClosingTag ? (
          <>
            <span className="card-tag-punctuation">&lt;/</span>
            <span className="card-tag">{config.name}</span>
            <span className="card-tag-punctuation">&gt;</span>
          </>
        ) : (
          <span className="card-tag-punctuation">/&gt;</span>
        )}
      </div>
      <CardFooter config={config} />
      {config.flavorText && (
        <div className="card-comment">
          <span>&lt;!--</span>
          <span>{config.flavorText}</span>
          <span>--&gt;</span>
        </div>
      )}
    </article>
  )
}

function InputCard({ config }: CardProps) {
  return (
    <article className="card dracula">
      <div className="card-suit">
        <span className="card-tag-punctuation">&lt;</span>
        <span className="card-tag">input</span>&nbsp;
        <span className="card-attr">type</span>
        <span className="card-punctuation">=</span>
      </div>
      <div className="card-title">
        <span className="card-string-punctuation">&quot;</span>
        <span className="card-string">{config.name}</span>
        <span className="card-string-punctuation">&quot;</span>
      </div>
      <div className="card-center">
        <div>
          {config.visual && (
            <div className="card-visual">{config.visual}</div>
          )}
        </div>
      </div>
      <div className="card-description">
        <Description parts={config.description} />
      </div>
      <div className="card-suit">
        <span className="card-tag-punctuation">/&gt;</span>
      </div>
      <CardFooter config={config} />
      {config.flavorText && (
        <div className="card-comment">
          <span>&lt;!--</span>
          <span>{config.flavorText}</span>
          <span>--&gt;</span>
        </div>
      )}
    </article>
  )
}

function ScriptCard({ config }: CardProps) {
  return (
    <article className="card night-owl">
      <div className="card-suit">
        <span className="card-tag-punctuation">&lt;</span>
        <span className="card-script-tag">script</span>&nbsp;
        <span className="card-attr">id</span>
        <span className="card-punctuation">=</span>
      </div>
      <div className="card-title">
        <span className="card-string-punctuation">&quot;</span>
        <span className="card-string">{config.name}</span>
        <span className="card-string-punctuation">&quot;</span>
        <span className="card-tag-punctuation">&gt;</span>
      </div>
      <div className="card-center">
        <div className="card-description">
          <Description parts={config.description} />
        </div>
      </div>
      <div className="card-suit">
        <span className="card-tag-punctuation">&lt;/</span>
        <span className="card-script-tag">script</span>
        <span className="card-tag-punctuation">&gt;</span>
      </div>
      <CardFooter config={config} />
      {config.flavorText && (
        <div className="card-comment">
          <span>&lt;!--</span>
          <span>{config.flavorText}</span>
          <span>--&gt;</span>
        </div>
      )}
    </article>
  )
}

export function DivCover() {
  return (
    <article className="card night-owl">
      <div className="card-center">
        <h1>
          <span className="card-tag-punctuation">&lt;/</span>
          <span className="card-tag">div</span>
          <span className="card-tag-punctuation">&gt;</span>
        </h1>
      </div>
    </article>
  )
}


export function SpanCover() {
  return (
    <article className="card dracula">
      <div className="card-center">
        <h1>
          <span className="card-tag-punctuation">&lt;</span>
          <span className="card-tag">span</span>
          <span className="card-tag-punctuation">&nbsp;/&gt;</span>
        </h1>
      </div>
    </article>
  )
}


export default Card
