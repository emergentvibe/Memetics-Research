import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const CustomHomepage: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
    // Only render on the homepage
    if (fileData.slug !== "index") {
      return null
    }

    return (
      <div class="custom-homepage">
        <section class="hero">
          <h1 class="hero__title">
            Welcome to <span class="gradient-text">EmergentVibe</span>
          </h1>
          <p class="hero__subtitle">
            A digital space exploring the intersection of <strong>art</strong>, <strong>research</strong>, and <strong>software</strong>
          </p>
          <blockquote class="hero__quote">
            "Multi-talented polymath blending creative arts, advanced technology,
            and psychosocial innovation with deep engagement in community-building
            and emergent subcultures."
          </blockquote>
        </section>

        <section class="feature-grid">
          <a href="/art" class="feature-card">
            <div class="feature-card__icon">🎨</div>
            <h3 class="feature-card__title">Art</h3>
            <p class="feature-card__desc">
              Collaborative painting, emergence, creative facilitation
            </p>
          </a>

          <a href="/thoughts" class="feature-card">
            <div class="feature-card__icon">💭</div>
            <h3 class="feature-card__title">Thoughts</h3>
            <p class="feature-card__desc">
              Memetics, consciousness, digital superorganism, philosophy
            </p>
          </a>

          <a href="/software" class="feature-card">
            <div class="feature-card__icon">💻</div>
            <h3 class="feature-card__title">Software</h3>
            <p class="feature-card__desc">
              Open source experiments, tools, data visualization
            </p>
          </a>
        </section>

        <section class="social-links">
          <h2 class="social-links__title">Connect</h2>
          <div class="social-grid">
            <a href="https://github.com/emergentvibe" target="_blank" rel="noopener" class="social-card">
              <div class="social-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div class="social-card__content">
                <h3>GitHub</h3>
                <p>Open source projects</p>
              </div>
            </a>

            <a href="https://x.com/emergentvibe" target="_blank" rel="noopener" class="social-card">
              <div class="social-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div class="social-card__content">
                <h3>X (Twitter)</h3>
                <p>@emergentvibe</p>
              </div>
            </a>

            <a href="https://emergentvibe.substack.com/" target="_blank" rel="noopener" class="social-card">
              <div class="social-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </div>
              <div class="social-card__content">
                <h3>Substack</h3>
                <p>Newsletter & essays</p>
              </div>
            </a>
          </div>
        </section>

        <section class="explore">
          <h2>Explore the vault</h2>
          <p>
            This site hosts my digital garden of interconnected thoughts, research notes,
            and creative explorations. Use the search bar above to find specific topics,
            or browse the graph view to discover connections.
          </p>
          <div class="explore__features">
            <div class="explore__feature">
              <strong>Search:</strong> Find content across all pages
            </div>
            <div class="explore__feature">
              <strong>Graph:</strong> Visualize page connections
            </div>
            <div class="explore__feature">
              <strong>Backlinks:</strong> See what references each page
            </div>
          </div>
        </section>
      </div>
    )
  }

  CustomHomepage.css = `
    .custom-homepage {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .hero {
      text-align: center;
      margin-bottom: 4rem;
    }

    .hero__title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--holo-cyan), var(--holo-purple));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }

    .hero__subtitle {
      font-size: 1.25rem;
      color: var(--gray);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .hero__quote {
      font-style: italic;
      color: var(--darkgray);
      border-left: 4px solid var(--holo-purple);
      padding-left: 1.5rem;
      margin: 2rem auto;
      max-width: 700px;
      text-align: left;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .feature-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(138, 43, 226, 0.2);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      border-color: var(--holo-purple);
      box-shadow: 0 8px 24px rgba(138, 43, 226, 0.2);
    }

    .feature-card__icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card__title {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--holo-cyan);
    }

    .feature-card__desc {
      color: var(--gray);
      line-height: 1.6;
    }

    .social-links {
      margin-bottom: 4rem;
    }

    .social-links__title {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 2rem;
      color: var(--holo-cyan);
    }

    .social-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .social-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(0, 255, 255, 0.2);
      border-radius: 8px;
      padding: 1.5rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
    }

    .social-card:hover {
      border-color: var(--holo-cyan);
      box-shadow: 0 4px 16px rgba(0, 255, 255, 0.2);
    }

    .social-card__icon {
      font-size: 2rem;
      color: var(--holo-cyan);
    }

    .social-card__icon svg {
      width: 24px;
      height: 24px;
    }

    .social-card__content h3 {
      margin: 0 0 0.25rem 0;
      font-size: 1rem;
      color: var(--holo-cyan);
    }

    .social-card__content p {
      margin: 0;
      font-size: 0.875rem;
      color: var(--gray);
    }

    .explore {
      text-align: center;
      padding: 2rem;
      background: rgba(138, 43, 226, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(138, 43, 226, 0.2);
    }

    .explore h2 {
      color: var(--holo-purple);
      margin-bottom: 1rem;
    }

    .explore p {
      color: var(--gray);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .explore__features {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .explore__feature {
      color: var(--darkgray);
    }

    .explore__feature strong {
      color: var(--holo-purple);
    }

    @media (max-width: 800px) {
      .hero__title {
        font-size: 2rem;
      }

      .hero__subtitle {
        font-size: 1.1rem;
      }

      .feature-grid {
        grid-template-columns: 1fr;
      }

      .social-grid {
        grid-template-columns: 1fr;
      }

      .explore__features {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `

  return CustomHomepage
}) satisfies QuartzComponentConstructor
