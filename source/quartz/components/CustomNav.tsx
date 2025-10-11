import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface NavLink {
  title: string
  url: string
  children?: NavLink[]
}

export default (() => {
  const CustomNav: QuartzComponent = ({ fileData, cfg }: QuartzComponentProps) => {
    const navigation: NavLink[] = [
      {
        title: "ART",
        url: "/art/workshops"
      },
      {
        title: "THOUGHTS",
        url: "/thoughts",
        children: [
          { title: "Research Manifesto", url: "/research-manifesto" },
          { title: "Bodhisattvic Memeplex", url: "/the-bodhisattvic-memecomplex-awakening-the-superorganism" },
          { title: "Hyperobject Cartography", url: "/cartography-as-countermeasure---mapping-memetic-hyperobjects" },
          { title: "Ask The Internet", url: "/ask-the-internet-%E2%80%93-consensus" },
        ],
      },
      {
        title: "SOFTWARE",
        url: "/software",
        children: [
          { title: "Bluesky Sentiment", url: "/software/bluesky-sentiment" },
          { title: "EVA", url: "/software/eva" },
          { title: "No Backspace", url: "/software/no-backspace" },
          { title: "Film Night", url: "/software/film-night" },
          { title: "Discourse Map", url: "/software/discourse-map" },
          { title: "Serendipity", url: "/software/serendipity" },
          { title: "Emotion Explorer", url: "/software/emotion-explorer" },
        ],
      },
    ]

    return (
      <nav class="custom-nav">
        <div class="custom-nav__logo">
          <a href="/">
            <img src="/art-gallery/profile-current.jpg" alt="EmergentVibe" class="custom-nav__logo-img" />
            <span>EMERGENTVIBE</span>
          </a>
        </div>
        <ul class="custom-nav__list">
          {navigation.map((item) => (
            <li class="custom-nav__item" data-has-children={item.children ? "true" : "false"}>
              <a href={item.url} class="custom-nav__link">
                {item.title}
              </a>
              {item.children && (
                <ul class="custom-nav__submenu">
                  {item.children.map((child) => (
                    <li class="custom-nav__subitem">
                      <a href={child.url} class="custom-nav__sublink">
                        {child.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  CustomNav.css = `
    .custom-nav {
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 1rem 0;
      width: 71%;
    }

    .custom-nav__logo {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: 0.15em;
    }

    .custom-nav__logo a {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
    }

    .custom-nav__logo-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--secondary);
      transition: all 0.3s ease;
    }

    .custom-nav__logo a:hover .custom-nav__logo-img {
      border-color: var(--tertiary);
      box-shadow: 0 0 12px rgba(0, 255, 255, 0.5);
    }

    .custom-nav__logo a span {
      background: linear-gradient(135deg, var(--secondary), var(--tertiary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .custom-nav__list {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
      flex: 1;
    }

    .custom-nav__item {
      position: relative;
    }

    .custom-nav__link {
      display: block;
      padding: 0.5rem 1rem;
      color: var(--secondary);
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.1em;
      transition: all 0.3s ease;
      border: 1px solid transparent;
      border-radius: 4px;
    }

    .custom-nav__link:hover,
    .custom-nav__link.active {
      color: var(--tertiary);
      border-color: var(--tertiary);
    }

    .custom-nav__submenu {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 200px;
      background: rgba(15, 15, 25, 0.95);
      border: 1px solid var(--secondary);
      border-radius: 4px;
      padding: 0.5rem 0;
      margin-top: 0.5rem;
      list-style: none;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
    }

    .custom-nav__item:hover .custom-nav__submenu {
      opacity: 1;
      visibility: visible;
    }

    .custom-nav__subitem {
      margin: 0;
    }

    .custom-nav__sublink {
      display: block;
      padding: 0.5rem 1rem;
      color: var(--lightgray);
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .custom-nav__sublink:hover,
    .custom-nav__sublink.active {
      background: rgba(138, 43, 226, 0.1);
      color: var(--tertiary);
      padding-left: 1.5rem;
    }

    @media (max-width: 800px) {
      .custom-nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .custom-nav__list {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
        width: 100%;
      }

      .custom-nav__item {
        flex-shrink: 0;
      }

      .custom-nav__link {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
      }

      .custom-nav__submenu {
        display: none;
      }
    }
  `

  CustomNav.afterDOMLoaded = `
    document.addEventListener('nav', () => {
      // Add active state to current page
      const currentPath = window.location.pathname
      const links = document.querySelectorAll('.custom-nav__link, .custom-nav__sublink')

      links.forEach(link => {
        const href = link.getAttribute('href')
        if (href && currentPath.includes(href) && href !== '/') {
          link.classList.add('active')
        } else if (href === '/' && currentPath === '/') {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    })
  `

  return CustomNav
}) satisfies QuartzComponentConstructor
