import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/buymeacoffee.inline"

export default (() => {
  const BuyMeCoffee: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`buy-me-coffee ${displayClass ?? ""}`}>
        <h3>Support</h3>
        <a
          href="https://www.buymeacoffee.com/emergentvibe"
          target="_blank"
          rel="noopener noreferrer"
          class="buy-me-coffee__button"
        >
          <span class="buy-me-coffee__icon">☕</span>
          <span class="buy-me-coffee__text">Buy me a coffee</span>
        </a>
        {/* <div class="buy-me-coffee__stats" id="bmc-stats">
          <div class="buy-me-coffee__stat">
            <span class="buy-me-coffee__stat-value" id="bmc-supporters">—</span>
            <span class="buy-me-coffee__stat-label">supporters</span>
          </div>
        </div> */}
      </div>
    )
  }

  BuyMeCoffee.css = `
  .buy-me-coffee {
    margin-top: 0;
  }

  .buy-me-coffee h3 {
    font-size: 0.9rem;
    margin: 0 0 0.75rem 0;
    font-family: 'JetBrains Mono', monospace;
    color: var(--secondary);
    text-shadow: 0 0 8px rgba(0, 243, 255, 0.5);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .buy-me-coffee h3::before {
    content: '◈ ';
    opacity: 0.6;
  }

  .buy-me-coffee__button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(0, 243, 255, 0.1));
    border: 1px solid rgba(0, 243, 255, 0.3);
    border-radius: 6px;
    color: var(--dark);
    text-decoration: none;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;
  }

  .buy-me-coffee__button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .buy-me-coffee__button:hover::before {
    left: 100%;
  }

  .buy-me-coffee__button:hover {
    border-color: var(--secondary);
    box-shadow: 0 0 12px rgba(0, 243, 255, 0.4);
    transform: translateY(-2px);
  }

  .buy-me-coffee__icon {
    font-size: 1.2rem;
    filter: drop-shadow(0 0 4px rgba(0, 243, 255, 0.5));
  }

  .buy-me-coffee__text {
    position: relative;
    z-index: 1;
  }

  .buy-me-coffee__stats {
    margin-top: 0.75rem;
    display: flex;
    gap: 1rem;
  }

  .buy-me-coffee__stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    background: rgba(10, 10, 21, 0.5);
    border: 1px solid rgba(0, 243, 255, 0.2);
    border-radius: 4px;
    flex: 1;
  }

  .buy-me-coffee__stat-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--secondary);
    text-shadow: 0 0 8px rgba(0, 243, 255, 0.5);
  }

  .buy-me-coffee__stat-label {
    font-size: 0.7rem;
    color: var(--gray);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 0.25rem;
  }
  `

  BuyMeCoffee.afterDOMLoaded = script

  return BuyMeCoffee
}) satisfies QuartzComponentConstructor
