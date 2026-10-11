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
        Name
        <input type="text" />
      </label>
      <label>
        <input type="checkbox" />
        Cat
      </label>
      <label>
        <input type="checkbox" />
        Dog
      </label>
    </form>
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