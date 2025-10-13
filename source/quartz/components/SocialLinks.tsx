import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const SocialLinks: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const getIcon = (iconName: string) => {
      switch (iconName) {
        case "github":
          return (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          )
        case "twitter":
          return (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          )
        case "substack":
          return (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
          )
        default:
          return null
      }
    }

    const links = [
      {
        name: "GitHub",
        url: "https://github.com/emergentvibe",
        icon: "github",
      },
      {
        name: "X (Twitter)",
        url: "https://x.com/emergentvibe",
        icon: "twitter",
      },
      {
        name: "Substack",
        url: "https://emergentvibe.substack.com/",
        icon: "substack",
      },
    ]

    return (
      <div class={`social-links ${displayClass ?? ""}`}>
        <h3>Connect</h3>
        <div class="social-links__container">
          {links.map((link) => (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class={`social-link social-link--${link.icon}`}
              aria-label={link.name}
            >
              <span class="social-link__icon">{getIcon(link.icon)}</span>
              <span class="social-link__name">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    )
  }

  SocialLinks.css = `
  .social-links {
    margin-top: 0;
  }

  .social-links h3 {
    font-size: 0.9rem;
    margin: 0 0 0.75rem 0;
    font-family: 'JetBrains Mono', monospace;
    color: var(--secondary);
    text-shadow: 0 0 8px rgba(0, 243, 255, 0.5);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .social-links h3::before {
    content: '◈ ';
    opacity: 0.6;
  }

  .social-links__container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(0, 243, 255, 0.08));
    border: 1px solid rgba(0, 243, 255, 0.3);
    border-radius: 6px;
    color: var(--dark);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', monospace;
    position: relative;
    overflow: hidden;
  }

  .social-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.15), transparent);
    transition: left 0.5s ease;
  }

  .social-link:hover::before {
    left: 100%;
  }

  .social-link__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 4px rgba(0, 243, 255, 0.4));
  }

  .social-link__icon svg {
    width: 20px;
    height: 20px;
  }

  .social-link__name {
    flex: 1;
    position: relative;
    z-index: 1;
  }

  .social-link:hover {
    border-color: var(--secondary);
    box-shadow: 0 0 12px rgba(0, 243, 255, 0.4);
    transform: translateY(-2px);
  }

  .social-link:hover .social-link__icon {
    filter: drop-shadow(0 0 8px rgba(0, 243, 255, 0.6));
  }
  `

  return SocialLinks
}) satisfies QuartzComponentConstructor
