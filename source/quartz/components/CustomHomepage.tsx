import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const CustomHomepage: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
    // Only render on the homepage
    if (fileData.slug !== "index") {
      return null
    }

    return (
      <div class="custom-homepage">
        {/* HERO SECTION - Expert: "Bold, confident opening. The gradient text creates immediate visual impact." */}
        <section class="hero">
          <h1 class="hero__title">
            <span class="gradient-text">EmergentVibe</span>
          </h1>
          <p class="hero__subtitle">
            Exploring the intersection of <strong>art</strong>, <strong>research</strong>, and <strong>software</strong>
          </p>
          {/* <blockquote class="hero__quote">
            "Multi-talented polymath blending creative arts, advanced technology,
            and psychosocial innovation with deep engagement in community-building
            and emergent subcultures."
          </blockquote> */}
        </section>

        {/* ABOUT SECTION - Expert: "Critical addition. This immediately answers 'why should I care?' and establishes authority." */}
        <section class="about">
          <p class="about__text">
            This is my digital garden—a living collection of interconnected thoughts.
            I think a lot about superorganisms, the collective mind and how memetics can unify psychology and sociology into one science.
          </p>
        </section>

        {/* PRIMARY CTA - Expert: "Clear conversion path. This button should be the most prominent element after the title." */}
        <section class="cta-primary">
          <a href="/research-manifesto" class="btn btn--primary">
            <span class="btn__text">Explore My Vault</span>
            <span class="btn__icon">→</span>
          </a>
          <p class="cta-primary__subtitle">Start with the manifesto that guides my work</p>
        </section>

        {/* QUICK START - Expert: "Perfect. Multiple entry points reduce friction and accommodate different learning styles." */}
        {/* <section class="quick-start">
          <h2 class="section-title">Quick Start</h2>
          <div class="quick-start__grid">
            <div class="quick-start__card">
              <span class="quick-start__emoji">🧠</span>
              <h3>New to my work?</h3>
              <p>Start with the <a href="/research-manifesto">Research Manifesto</a></p>
            </div>
            <div class="quick-start__card">
              <span class="quick-start__emoji">💡</span>
              <h3>Browse by topic</h3>
              <p>
                <a href="/thoughts">Consciousness</a> ·
                <a href="/thoughts">Memetics</a> ·
                <a href="/thoughts">Emergence</a>
              </p>
            </div>
            <div class="quick-start__card">
              <span class="quick-start__emoji">🔍</span>
              <h3>Search the vault</h3>
              <p>Use the search bar above to find specific topics</p>
            </div>
          </div>
        </section> */}

        {/* FEATURED PROJECTS - Expert: "Excellent. This showcases your best work and gives concrete examples of your capabilities." */}
        <section class="featured-projects">
          <h2 class="section-title">Featured Projects</h2>
          <div class="projects-grid">
            <a href="/the-bodhisattvic-memecomplex-awakening-the-superorganism" class="project-card">
              <div class="project-card__header">
                <span class="project-card__icon">🧘</span>
                <span class="project-card__tag">writing</span>
              </div>
              <h3 class="project-card__title">Bodhisattvic Memeplex</h3>
              <p class="project-card__desc">
                Exploring compassionate memetic engineering and the awakening of collective consciousness.
              </p>
              <span class="project-card__link">Read more →</span>
            </a>

            <a href="/software/bluesky-sentiment" class="project-card">
              <div class="project-card__header">
                <span class="project-card__icon">📊</span>
                <span class="project-card__tag">Software</span>
              </div>
              <h3 class="project-card__title">Bluesky Sentiment</h3>
              <p class="project-card__desc">
                Real-time sentiment analysis and visualization of collective emotional patterns on Bluesky.
              </p>
              <span class="project-card__link">Explore →</span>
            </a>

            <a href="https://twitter-replies-cluster.fly.dev/" target="_blank" rel="noopener noreferrer" class="project-card">
              <div class="project-card__header">
                <span class="project-card__icon">💬</span>
                <span class="project-card__tag">Software</span>
              </div>
              <h3 class="project-card__title">Twitter Discourse Analyzer</h3>
              <p class="project-card__desc">
                Cluster analysis and visualization of Twitter replies using AI.
              </p>
              <span class="project-card__link">Explore →</span>
            </a>
          </div>
        </section>

        {/* SECONDARY CTA - Expert: "Newsletter signup is perfectly placed here. Users who scrolled this far are engaged." */}
        <section class="cta-secondary">
          <div class="newsletter-cta">
            <h2 class="newsletter-cta__title">Stay Updated</h2>
            <p class="newsletter-cta__desc">
              Get essays, research notes, and project updates delivered to your inbox.
            </p>
            <a href="https://emergentvibe.substack.com/" target="_blank" rel="noopener" class="btn btn--secondary">
              <span class="btn__text">Subscribe on Substack</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="btn__icon-svg">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
            </a>
          </div>
        </section>
      </div>
    )
  }

  CustomHomepage.css = `
    /* ============================================================================
       EXPERT COMMENTARY: "Foundation is solid. Now we build depth and hierarchy."
       ============================================================================ */

    .custom-homepage {
      max-width: 900px;
      margin: 0 auto;
      padding: 3rem 1rem;
      position: relative;
    }

    /* Ambient glow effect - Expert: "Subtle depth without overwhelming content" */
    .custom-homepage::before {
      content: '';
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 120%;
      height: 500px;
      background: radial-gradient(
        ellipse at center,
        rgba(138, 43, 226, 0.15) 0%,
        rgba(0, 243, 255, 0.08) 30%,
        transparent 70%
      );
      pointer-events: none;
      z-index: -1;
      animation: pulse 8s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
      50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
    }

    /* ============================================================================
       HERO SECTION - Expert: "Increased scale creates impact. The glow reinforces the cyberpunk aesthetic."
       ============================================================================ */

    .hero {
      text-align: center;
      margin-bottom: 4rem;
    }

    .hero__title {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--secondary), var(--tertiary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 40px rgba(0, 243, 255, 0.3);
      display: inline-block;
    }

    /* Fallback for browsers that don't support background-clip */
    @supports not (background-clip: text) {
      .gradient-text {
        color: var(--secondary);
      }
    }

    .hero__subtitle {
      font-size: 1.4rem;
      font-weight: 300;
      color: var(--gray);
      margin: 0 auto 3rem;
      line-height: 1.6;
      max-width: 650px;
    }

    .hero__quote {
      font-style: italic;
      font-size: 1.1rem;
      font-weight: 400;
      color: var(--darkgray);
      border-left: 3px solid var(--tertiary);
      padding-left: 1.5rem;
      margin: 2rem auto;
      max-width: 700px;
      text-align: left;
      opacity: 0.85;
    }

    /* ============================================================================
       ABOUT SECTION - Expert: "This is the hook. Strong emphasis on key terms guides the reader."
       ============================================================================ */

    .about {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background: linear-gradient(135deg, rgba(138, 43, 226, 0.08), rgba(0, 243, 255, 0.05));
      border-radius: 12px;
      border: 1px solid rgba(0, 243, 255, 0.15);
    }

    .about__text {
      font-size: 1.15rem;
      line-height: 1.8;
      color: var(--darkgray);
      margin: 0;
      max-width: 750px;
      margin: 0 auto;
    }

    .about__text strong {
      color: var(--secondary);
      font-weight: 600;
    }

    /* ============================================================================
       CTA BUTTONS - Expert: "Clear visual hierarchy. Primary button dominates, secondary is subtle."
       ============================================================================ */

    .cta-primary {
      text-align: center;
      margin-bottom: 4rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      border: 2px solid;
    }

    .btn--primary {
      background: linear-gradient(135deg, var(--secondary), var(--tertiary));
      border-color: transparent;
      box-shadow: 0 4px 20px rgba(0, 243, 255, 0.3);
    }

    .btn--primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 243, 255, 0.5);
    }

    .btn--primary .btn__icon {
      transition: transform 0.3s ease;
    }

    .btn--primary:hover .btn__icon {
      transform: translateX(4px);
    }

    .btn--secondary {
      background: rgba(138, 43, 226, 0.1);
      color: var(--secondary);
      border-color: var(--secondary);
    }

    .btn--secondary:hover {
      background: rgba(138, 43, 226, 0.2);
      border-color: var(--tertiary);
      color: var(--tertiary);
      box-shadow: 0 4px 16px rgba(138, 43, 226, 0.3);
    }

    .btn__icon-svg {
      transition: transform 0.3s ease;
    }

    .btn--secondary:hover .btn__icon-svg {
      transform: translateX(4px);
    }

    .cta-primary__subtitle {
      margin-top: 1rem;
      font-size: 0.95rem;
      color: var(--gray);
      font-style: italic;
    }

    /* ============================================================================
       QUICK START - Expert: "Perfect information scent. Each card is a clear signpost."
       ============================================================================ */

    .quick-start {
      margin-bottom: 5rem;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--secondary);
      text-align: center;
      margin-bottom: 2.5rem;
      position: relative;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--secondary), var(--tertiary));
      margin: 1rem auto 0;
      border-radius: 2px;
    }

    .quick-start__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }

    .quick-start__card {
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(0, 243, 255, 0.15);
      border-radius: 8px;
      transition: all 0.3s ease;
      text-align: center;
    }

    .quick-start__card:hover {
      border-color: var(--secondary);
      background: rgba(0, 243, 255, 0.05);
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0, 243, 255, 0.15);
    }

    .quick-start__emoji {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 1rem;
    }

    .quick-start__card h3 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--darkgray);
      margin: 0 0 0.5rem 0;
    }

    .quick-start__card p {
      font-size: 0.9rem;
      color: var(--gray);
      margin: 0;
      line-height: 1.5;
    }

    .quick-start__card a {
      color: var(--secondary);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .quick-start__card a:hover {
      color: var(--tertiary);
      text-decoration: underline;
    }

    /* ============================================================================
       FEATURED PROJECTS - Expert: "Beautiful. The tags add context, the hover states invite interaction."
       ============================================================================ */

    .featured-projects {
      margin-bottom: 5rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(0, 243, 255, 0.05));
      border: 1px solid rgba(0, 243, 255, 0.25);
      border-radius: 12px;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .project-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.1), transparent);
      transition: left 0.5s ease;
    }

    .project-card:hover::before {
      left: 100%;
    }

    .project-card:hover {
      border-color: var(--secondary);
      box-shadow: 0 8px 30px rgba(0, 243, 255, 0.2);
      transform: translateY(-4px);
    }

    .project-card__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .project-card__icon {
      font-size: 2rem;
    }

    .project-card__tag {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--secondary);
      background: rgba(0, 243, 255, 0.15);
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
    }

    .project-card__title {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--darkgray);
      margin: 0 0 0.75rem 0;
    }

    .project-card__desc {
      font-size: 0.95rem;
      color: var(--gray);
      line-height: 1.6;
      margin: 0 0 1rem 0;
      flex: 1;
    }

    .project-card__link {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--secondary);
      transition: all 0.3s ease;
    }

    .project-card:hover .project-card__link {
      color: var(--tertiary);
      transform: translateX(4px);
      display: inline-block;
    }

    /* ============================================================================
       NEWSLETTER CTA - Expert: "Strong closing. The visual treatment makes it feel like a destination, not an afterthought."
       ============================================================================ */

    .cta-secondary {
      margin-bottom: 3rem;
    }

    .newsletter-cta {
      text-align: center;
      padding: 3rem 2rem;
      background: linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(0, 243, 255, 0.08));
      border: 2px solid rgba(0, 243, 255, 0.3);
      border-radius: 16px;
      position: relative;
    }

    .newsletter-cta::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(135deg, var(--secondary), var(--tertiary));
      border-radius: 16px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }

    .newsletter-cta:hover::before {
      opacity: 0.1;
    }

    .newsletter-cta__title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--secondary);
      margin: 0 0 1rem 0;
    }

    .newsletter-cta__desc {
      font-size: 1.1rem;
      color: var(--darkgray);
      margin: 0 0 2rem 0;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    /* ============================================================================
       RESPONSIVE - Expert: "Clean breakpoints maintain hierarchy on smaller screens."
       ============================================================================ */

    @media (max-width: 1000px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 800px) {
      .custom-homepage {
        padding: 2rem 1rem;
      }

      .hero__title {
        font-size: 2.5rem;
      }

      .hero__subtitle {
        font-size: 1.2rem;
      }

      .about__text {
        font-size: 1rem;
      }

      .quick-start__grid {
        grid-template-columns: 1fr;
      }

      .newsletter-cta {
        padding: 2rem 1.5rem;
      }

      .btn {
        padding: 0.875rem 2rem;
        font-size: 1rem;
      }
    }

    @media (max-width: 600px) {
      .hero__title {
        font-size: 2rem;
      }

      .section-title {
        font-size: 1.5rem;
      }

      .btn {
        width: 100%;
        justify-content: center;
      }
    }
  `

  return CustomHomepage
}) satisfies QuartzComponentConstructor
