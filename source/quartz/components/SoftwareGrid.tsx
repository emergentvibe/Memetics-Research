import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface SoftwareProject {
  name: string
  description: string
  liveUrl: string
  githubUrl?: string
  screenshot?: string
  tags: string[]
}

export default (() => {
  const SoftwareGrid: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    // Only render on the software page
    if (fileData.slug !== "software") {
      return null
    }

    const projects: SoftwareProject[] = [
      {
        name: "Vibe Semantic Recommendations",
        description: "Semantic search and recommendation engine for discovering content based on meaning and context rather than keywords.",
        liveUrl: "https://vibe-recommendations.emergentvibe.com/",
        screenshot: "/software-screenshots/vibe-recommendations.png",
        tags: ["AI", "Semantic Search", "Recommendations"]
      },
      {
        name: "Bluesky Sentiment Dashboard",
        description: "Real-time sentiment analysis and visualization of collective emotional patterns across the Bluesky social network.",
        liveUrl: "https://github.com/emergentvibe/bluesky-sentiment-analysis",
        screenshot: "/software-screenshots/bluesky-sentiment.png",
        tags: ["Data Viz", "Sentiment Analysis", "Social"]
      },
      {
        name: "Twitter Discourse Analyzer",
        description: "Cluster analysis and visualization of Twitter reply networks to map conversation structures and discourse patterns.",
        liveUrl: "https://twitter-replies-cluster.fly.dev/",
        screenshot: "/software-screenshots/twitter-discourse.png",
        tags: ["Network Analysis", "Visualization", "Social"]
      },
      {
        name: "Film Night Decider",
        description: "Collaborative decision-making tool for groups to democratically choose films using ranked-choice voting.",
        liveUrl: "https://film-night.fly.dev/",
        screenshot: "/software-screenshots/film-night.png",
        tags: ["Collaboration", "Decision Making", "Fun"]
      }
    ]

    return (
      <div class="software-grid">
        <div class="software-grid__intro">
          <h2 class="software-grid__title">Published Apps</h2>
          <p class="software-grid__subtitle">
            Experiments to understand social media, enable the semantic web, and enable collective intelligence and sensemaking.
          </p>
        </div>

        <div class="software-grid__cards">
          {projects.map((project) => (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="software-card">
              <div class="software-card__screenshot">
                {project.screenshot ? (
                  <img src={project.screenshot} alt={`${project.name} screenshot`} />
                ) : (
                  <div class="software-card__placeholder">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                )}
              </div>

              <div class="software-card__content">
                <div class="software-card__header">
                  <h3 class="software-card__title">{project.name}</h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="software-card__github"
                      onClick={(e: Event) => e.stopPropagation()}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>

                <p class="software-card__desc">{project.description}</p>

                <div class="software-card__tags">
                  {project.tags.map((tag) => (
                    <span class="software-card__tag">{tag}</span>
                  ))}
                </div>

                <div class="software-card__footer">
                  <span class="software-card__link">
                    View Project →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }

  SoftwareGrid.css = `
    /* ============================================================================
       SOFTWARE GRID - Expert: "Cards showcase projects with clear hierarchy and visual appeal."
       ============================================================================ */

    .software-grid {
      margin-bottom: 4rem;
    }

    .software-grid__intro {
      text-align: center;
      margin-bottom: 3rem;
    }

    .software-grid__title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--secondary);
      margin: 0 0 1rem 0;
    }

    .software-grid__subtitle {
      font-size: 1.1rem;
      color: var(--gray);
      line-height: 1.6;
      max-width: 700px;
      margin: 0 auto;
    }

    .software-grid__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    /* Software Card - Expert: "Screenshot preview + content creates complete mental model" */
    .software-card {
      display: flex;
      flex-direction: column;
      background: linear-gradient(135deg, rgba(138, 43, 226, 0.08), rgba(0, 243, 255, 0.04));
      border: 1px solid rgba(0, 243, 255, 0.2);
      border-radius: 12px;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
      position: relative;
    }

    .software-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--secondary), var(--tertiary));
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .software-card:hover {
      border-color: var(--secondary);
      box-shadow: 0 8px 30px rgba(0, 243, 255, 0.2);
      transform: translateY(-4px);
    }

    .software-card:hover::before {
      opacity: 1;
    }

    /* Screenshot/Placeholder - Expert: "Visual preview is critical for understanding the project" */
    .software-card__screenshot {
      width: 100%;
      height: 200px;
      background: rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }

    .software-card__screenshot img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .software-card:hover .software-card__screenshot img {
      transform: scale(1.05);
    }

    .software-card__placeholder {
      color: var(--gray);
      opacity: 0.3;
    }

    /* Content - Expert: "Clear information hierarchy with title, description, tags, and CTA" */
    .software-card__content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .software-card__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem;
      gap: 1rem;
    }

    .software-card__title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--darkgray);
      margin: 0;
      flex: 1;
    }

    .software-card__github {
      color: var(--gray);
      transition: color 0.2s ease;
      flex-shrink: 0;
      padding: 0.25rem;
    }

    .software-card__github:hover {
      color: var(--secondary);
    }

    .software-card__desc {
      font-size: 0.95rem;
      color: var(--gray);
      line-height: 1.6;
      margin: 0 0 1rem 0;
      flex: 1;
    }

    /* Tags - Expert: "Tags provide quick categorization and improve scannability" */
    .software-card__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .software-card__tag {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--secondary);
      background: rgba(0, 243, 255, 0.1);
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      border: 1px solid rgba(0, 243, 255, 0.2);
    }

    .software-card__footer {
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid rgba(0, 243, 255, 0.1);
    }

    .software-card__link {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--secondary);
      transition: all 0.3s ease;
      display: inline-block;
    }

    .software-card:hover .software-card__link {
      color: var(--tertiary);
      transform: translateX(4px);
    }

    /* Responsive - Expert: "Grid adapts gracefully to smaller screens" */
    @media (max-width: 1200px) {
      .software-grid__cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 800px) {
      .software-grid__cards {
        grid-template-columns: 1fr;
      }

      .software-grid__title {
        font-size: 2rem;
      }

      .software-grid__subtitle {
        font-size: 1rem;
      }

      .software-card__screenshot {
        height: 180px;
      }
    }
  `

  return SoftwareGrid
}) satisfies QuartzComponentConstructor
