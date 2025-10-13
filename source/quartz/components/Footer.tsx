import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []

    // Expert: "Footer now serves as the social hub. Icons add visual interest and improve scannability."
    const getSocialIcon = (text: string) => {
      if (text === "GitHub") {
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )
      } else if (text === "X (Twitter)") {
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        )
      } else if (text === "Substack") {
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
          </svg>
        )
      }
      return null
    }

    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="footer-content">
          <div class="footer-brand">
            <b>emergentvibe.com</b>
            <p class="footer-tagline">Exploring memetics, consciousness, and emergence</p>
          </div>

          <div class="footer-social">
            <h4>Connect</h4>
            <ul class="footer-social-links">
              {Object.entries(links).map(([text, link]) => (
                <li>
                  <a href={link} target="_blank" rel="noopener noreferrer" class="footer-social-link">
                    <span class="footer-social-icon">{getSocialIcon(text)}</span>
                    <span class="footer-social-text">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div class="footer-meta">
            <p>
              {i18n(cfg.locale).components.footer.createdWith}{" "}
              <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
            </p>
            <p>© {year}</p>
          </div>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
