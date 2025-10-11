import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  repo?: string
}

export default ((opts?: Options) => {
  const GitHubProject: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    // Get repo from component options or frontmatter
    const repo = opts?.repo ?? fileData.frontmatter?.github ?? ""

    if (!repo) {
      return null
    }

    return (
      <div class={`github-project ${displayClass ?? ""}`} data-repo={repo}>
        <div class="github-project__header">
          <h2>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {repo}
          </h2>
          <a href={`https://github.com/${repo}`} target="_blank" rel="noopener" class="github-project__link">
            View on GitHub →
          </a>
        </div>
        <div class="github-project__content">
          <div class="loading">
            <div class="loading-spinner"></div>
            <p>Loading README...</p>
          </div>
        </div>
      </div>
    )
  }

  GitHubProject.css = `
    .github-project {
      margin: 2rem 0;
      border: 1px solid rgba(138, 43, 226, 0.3);
      border-radius: 12px;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.02);
    }

    .github-project__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(138, 43, 226, 0.2);
    }

    .github-project__header h2 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
      color: var(--holo-cyan);
      font-size: 1.25rem;
    }

    .github-project__header svg {
      color: var(--holo-purple);
    }

    .github-project__link {
      color: var(--holo-purple);
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      padding: 0.5rem 1rem;
      border: 1px solid var(--holo-purple);
      border-radius: 4px;
    }

    .github-project__link:hover {
      background: rgba(138, 43, 226, 0.1);
      box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);
    }

    .github-project__content {
      color: var(--darkgray);
      line-height: 1.6;
    }

    .github-project__content h1,
    .github-project__content h2,
    .github-project__content h3 {
      color: var(--holo-cyan);
      margin-top: 1.5rem;
    }

    .github-project__content a {
      color: var(--holo-purple);
    }

    .github-project__content pre {
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(138, 43, 226, 0.2);
      border-radius: 4px;
      padding: 1rem;
      overflow-x: auto;
    }

    .github-project__content code {
      background: rgba(0, 0, 0, 0.2);
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }

    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 3rem;
      color: var(--gray);
    }

    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(138, 43, 226, 0.2);
      border-top-color: var(--holo-purple);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .github-project__error {
      padding: 2rem;
      text-align: center;
      color: #ff6b6b;
      border: 1px solid #ff6b6b;
      border-radius: 8px;
      background: rgba(255, 107, 107, 0.1);
    }

    @media (max-width: 800px) {
      .github-project__header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
    }
  `

  GitHubProject.afterDOMLoaded = `
    document.addEventListener('nav', async () => {
      const projects = document.querySelectorAll('.github-project')

      for (const project of projects) {
        const repo = project.dataset.repo
        if (!repo) continue

        const content = project.querySelector('.github-project__content')

        try {
          // Fetch README from GitHub API
          const response = await fetch(
            \`https://api.github.com/repos/\${repo}/readme\`,
            {
              headers: {
                'Accept': 'application/vnd.github.v3.html'
              }
            }
          )

          if (!response.ok) {
            throw new Error(\`Failed to fetch README: \${response.status}\`)
          }

          const html = await response.text()

          // Replace content with README HTML
          content.innerHTML = html

          // Fix relative links to point to GitHub
          const links = content.querySelectorAll('a[href]')
          links.forEach(link => {
            const href = link.getAttribute('href')
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
              link.setAttribute('href', \`https://github.com/\${repo}/blob/main/\${href}\`)
              link.setAttribute('target', '_blank')
              link.setAttribute('rel', 'noopener')
            }
          })

          // Fix relative images to point to GitHub
          const images = content.querySelectorAll('img[src]')
          images.forEach(img => {
            const src = img.getAttribute('src')
            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
              img.setAttribute('src', \`https://raw.githubusercontent.com/\${repo}/main/\${src}\`)
            }
          })

        } catch (error) {
          console.error('Error loading GitHub README:', error)
          content.innerHTML = \`
            <div class="github-project__error">
              <p><strong>⚠️ Error loading README</strong></p>
              <p>\${error.message}</p>
              <p>
                <a href="https://github.com/\${repo}" target="_blank" rel="noopener">
                  View repository on GitHub instead
                </a>
              </p>
            </div>
          \`
        }
      }
    })
  `

  return GitHubProject
}) satisfies QuartzComponentConstructor
