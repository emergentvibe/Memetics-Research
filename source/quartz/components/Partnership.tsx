import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Partnership: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={`partnership ${displayClass ?? ""}`}>
        <h3>Partnership</h3>
        <div class="partnership__content">
          <a
            href="https://www.openresearch.institute/"
            target="_blank"
            rel="noopener noreferrer"
            class="partnership__link"
          >
            <img
              src="/Pasted-image-20250320095843.png"
              alt="Open Research Institute"
              class="partnership__logo"
            />
          </a>
          <p class="partnership__description">
            Partnering with{" "}
            <a
              href="https://www.openresearch.institute/"
              target="_blank"
              rel="noopener noreferrer"
              class="partnership__text-link"
            >
              Open Research Institute
            </a>{" "}
            to advance open-source research and innovation.
          </p>
        </div>
      </div>
    )
  }

  Partnership.css = `
  .partnership {
    margin-top: 0;
  }

  .partnership h3 {
    font-size: 0.9rem;
    margin: 0 0 0.75rem 0;
    font-family: 'JetBrains Mono', monospace;
    color: var(--secondary);
    text-shadow: 0 0 8px rgba(0, 243, 255, 0.5);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .partnership h3::before {
    content: '◈ ';
    opacity: 0.6;
  }

  .partnership__content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(0, 243, 255, 0.05));
    border: 1px solid rgba(0, 243, 255, 0.2);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .partnership__content:hover {
    border-color: rgba(0, 243, 255, 0.4);
    box-shadow: 0 0 12px rgba(0, 243, 255, 0.2);
  }

  .partnership__link {
    display: block;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .partnership__logo {
    width: 100%;
    height: auto;
    border-radius: 6px;
    transition: all 0.3s ease;
    filter: brightness(0.9) drop-shadow(0 0 4px rgba(0, 243, 255, 0.3));
  }

  .partnership__link:hover .partnership__logo {
    filter: brightness(1.1) drop-shadow(0 0 8px rgba(0, 243, 255, 0.5));
    transform: translateY(-2px);
  }

  .partnership__description {
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--darkgray);
    margin: 0;
  }

  .partnership__text-link {
    color: var(--secondary);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
    text-shadow: 0 0 4px rgba(0, 243, 255, 0.3);
  }

  .partnership__text-link:hover {
    color: var(--tertiary);
    text-shadow: 0 0 8px rgba(138, 43, 226, 0.5);
  }
  `

  return Partnership
}) satisfies QuartzComponentConstructor
