import './Visuals.scss'

export function CardVisual() {
  return (
    <div aria-hidden="true" className="miniCard">
      <div className="miniCard-image" />
      <div className="miniCard-text">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export function ArticleVisual() {
  return (
    <div aria-hidden="true" className="miniArticle">
      <span className="miniArticle-line miniArticle-line-first" />
      <span className="miniArticle-line" />
      <span className="miniArticle-line" />
      <span className="miniArticle-line miniArticle-line-short" />
      <span className="miniArticle-line miniArticle-line-first" />
      <span className="miniArticle-line" />
      <span className="miniArticle-line" />
    </div>
  )
}

export function AccordionVisual() {
  return (
    <div aria-hidden="true" className="miniAccordion">
      <div className="miniAccordion-row">
        <span />
        <span className="miniAccordion-toggle" />
      </div>
      <div className="miniAccordion-row miniAccordion-row-open">
        <span />
        <span className="miniAccordion-toggle" />
      </div>
      <div className="miniAccordion-content">
        <span />
        <span />
      </div>

    </div>
  )
}

export function TooltipVisual() {
  return (
    <div aria-hidden="true" className="miniTooltip">
      <div className="miniTooltip-bubble">
        <span />
      </div>
      <span className="miniTooltip-pointer" />
      <span className="miniTooltip-anchor" />
    </div>
  )
}

export function BlockquoteVisual() {
  return (
    <div aria-hidden="true" className="miniBlockquote">
      <div className="miniBlockquote-text">
        <span className="miniBlockquote-quote open">“</span>
        <span className="miniBlockquote-line first" />
        <span className="miniBlockquote-line" />
        <span className="miniBlockquote-line" />
        <span className="miniBlockquote-line" />
        <span className="miniBlockquote-line short" />
        <span className="miniBlockquote-quote close">”</span>
      </div>
    </div>
  )
}

export function BadgeVisual() {
  return (
    <div aria-hidden="true" className="miniBadge">
      <span className="miniBadge-warning">!</span>
      <span className="miniBadge-text" />
    </div>
  )
}

export function BannerAdVisual() {
  return (
    <div aria-hidden="true" className="miniBannerAd">
      <div className="miniBannerAd-image" />
      <div className="miniBannerAd-copy">
        <span className="miniBannerAd-heading" />
        <span className="miniBannerAd-line" />
        <span className="miniBannerAd-button" />
      </div>
    </div>
  )
}

export function SpinnerVisual() {
  return <div aria-hidden="true" className="miniSpinner" />
}

export function MiniGameVisual() {
  return (
    <div aria-hidden="true" className="miniGame">
      <div className="miniGame-dpad">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="miniGame-buttons">
        <span />
        <span />
      </div>
    </div>
  )
}

type ButtonVisualVariant =
  | 'primary'
  | 'base'
  | 'fab'
  | 'toggle'
  | 'hamburger'
  | 'ghost'
  | 'icon'

export function MiniButtonVisual({ variant }: { variant: ButtonVisualVariant }) {
  const className = `miniButton miniButton-${variant}`

  switch (variant) {
    case 'fab':
      return (
        <div aria-hidden="true" className={className}>
          <span className="miniButton-plus" />
        </div>
      )
    case 'toggle':
      return (
        <div aria-hidden="true" className={className}>
          <span>ON</span>
          <span className="miniButton-toggle-knob" />
        </div>
      )
    case 'hamburger':
      return (
        <div aria-hidden="true" className={className}>
          <span />
          <span />
          <span />
        </div>
      )
    case 'icon':
      return (
        <div aria-hidden="true" className={className}>
          <span className="miniButton-search-icon" />
        </div>
      )
    case 'primary':
      return (
        <div aria-hidden="true" className={className}>
          Get started
        </div>
      )
    case 'base':
      return (
        <button aria-hidden="true">
          Cancel
        </button>
      )
    case 'ghost':
      return (
        <div aria-hidden="true" className={className}>
          Learn more <span aria-hidden="true">→</span>
        </div>
      )
  }
}

export function HeroVisual() {
  return (
    <div aria-hidden="true" className="miniHero">
      <div className="miniHero-copy">
        <span className="miniHero-heading" />
        <span className="miniHero-line" />
        <span className="miniHero-line miniHero-line-short" />
        <span className="miniHero-button" />
      </div>
      <div className="miniHero-image" />
    </div>
  )
}

export function SidebarVisual() {
  return (
    <div aria-hidden="true" className="miniSidebar">
      <div className="miniSidebar-header" />
      <div className="miniSidebar-layout">
        <div className="miniSidebar-navigation">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="miniSidebar-content" />
      </div>
    </div>
  )
}

export function ContainerContainerVisual() {
  return (
    <div aria-hidden="true" className="miniContainer">
      <div className="miniContainer-box">
        <div className="miniContainer-box"/>
      </div>
      <div className="miniContainer-box"/>
    </div>
  )
}

export function MiniFormVisual() {
  return (
    <form aria-hidden="true" className="miniForm">
      <label>
        <span className="miniForm-placeholder" />
        <input type="text" />
      </label>
      <label>
        <input type="checkbox" />
        <span className="miniForm-line" />
      </label>
      <label>
        <input type="checkbox" />
        <span className="miniForm-line" />
      </label>
    </form>
  )
}

export function LoginVisual() {
  return (
    <div aria-hidden="true" className="miniLogin">
      <label>
        <span>Username</span>
        <span className="miniLogin-input" />
      </label>
      <label>
        <span>Password</span>
        <span className="miniLogin-input" />
      </label>
    </div>
  )
}

function MiniListVisual({ ordered }: { ordered: boolean }) {
  return (
    <div aria-hidden="true" className="miniList">
      <div className="miniList-items">
        {[1, 2, 3].map((item) => (
          <div className="miniList-item" key={item}>
            <span className="miniList-marker">
              {ordered ? `${item}.` : '•'}
            </span>
            <span className="miniList-line" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function MiniUnorderedListVisual() {
  return <MiniListVisual ordered={false} />
}

export function MiniOrderedListVisual() {
  return <MiniListVisual ordered />
}

export function LinebreakVisual() {
  return (
    <div aria-hidden="true" className="miniLinebreak">
      <span>_____</span> &lt;br /&gt;<br />
      <span>___</span> &lt;br /&gt;<br />
      <span>__________</span>
    </div>
  )
}

export function MiniDialogVisual() {
  return (
    <div aria-hidden="true" className="miniDialog">
      <span className="miniDialog-line" />
      <div className="miniDialog-actions">
        <span className="miniDialog-button">OK</span>
      </div>
    </div>
  )
}

export function MiniIframeVisual() {
  return (
    <div aria-hidden="true" className="miniIframe">
      <div className="miniIframe-browser">
        <div className="miniIframe-toolbar">
          <span />
          <span />
          <span />
        </div>
        <div className="miniIframe-content">
          <div className="miniIframe-frame">
            <span>&lt; / &gt;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SearchbarVisual() {
  return (
    <div aria-hidden="true" className="miniSearchbar">
      <div className="miniSearchbar-input">
        <span className="miniSearchbar-icon" />
      </div>
      <span className="miniSearchbar-button">go!</span>
    </div>
  )
}

export function NavbarVisual() {
  return (
    <div aria-hidden="true" className="miniNavbar">
      <span className="miniNavbar-logo">☆</span>
      <SearchbarVisual />
      <span className="miniNavbar-portrait">
        <span />
        <span />
      </span>
    </div>
  )
}

export function MarqueeVisual() {
  return (
    <div className="marqueeVisual">
      <div aria-hidden="true" className="marqueeContainer">
        <div className="miniMarquee">
          Scrolling text!
        </div>
      </div>
    </div>
  )
}

export function VideoPlayerVisual() {
  return (
    <div aria-hidden="true" className="miniVideoPlayer">
      <div className="miniVideoPlayer-screen">
        <span className="miniVideoPlayer-play" />
      </div>
      <div className="miniVideoPlayer-controls">
        <span className="miniVideoPlayer-play-control" />
        <span className="miniVideoPlayer-progress">
          <span />
        </span>
      </div>
    </div>
  )
}

export function ReelVisual() {
  return (
    <div aria-hidden="true" className="miniReelContainer">
      <VideoPlayerVisual />
    </div>
  )
}

export function CarouselVisual() {
  return (
    <div aria-hidden="true" className="miniCarousel">
      <div className="miniCarousel-stage">
        <span className="miniCarousel-arrow miniCarousel-arrow-left" />
        <div className="miniVideoPlayer-screen">
          <span className="miniVideoPlayer-play" />
        </div>
        <span className="miniCarousel-arrow miniCarousel-arrow-right" />
      </div>
      <div className="miniCarousel-dots">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export function TableVisual() {
  return (
    <table aria-hidden="true" className="miniTable">
      <thead>
        <tr>
          {[1, 2, 3].map((column) => (
            <th key={column} />
          ))}
        </tr>
      </thead>
      <tbody>
        {[1, 2].map((row) => (
          <tr key={row}>
            {[1, 2, 3].map((column) => (
              <td key={column} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
