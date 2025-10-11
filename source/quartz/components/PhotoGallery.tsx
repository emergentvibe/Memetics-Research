import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  images?: string[]
  columns?: number
}

export default ((opts?: Options) => {
  const PhotoGallery: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    // Get images from component options or frontmatter
    const images = opts?.images ?? fileData.frontmatter?.gallery ?? []
    const columns = opts?.columns ?? 3

    if (images.length === 0) {
      return null
    }

    return (
      <div class="photo-gallery" style={`grid-template-columns: repeat(${columns}, 1fr)`}>
        {images.map((img: string, idx: number) => (
          <div class="gallery-item" data-index={idx}>
            <img src={img} alt={`Gallery image ${idx + 1}`} loading="lazy" />
          </div>
        ))}
        <div class="lightbox">
          <button class="lightbox__close" aria-label="Close lightbox">×</button>
          <button class="lightbox__prev" aria-label="Previous image">‹</button>
          <button class="lightbox__next" aria-label="Next image">›</button>
          <img src="" alt="" class="lightbox__image" />
          <div class="lightbox__caption"></div>
        </div>
      </div>
    )
  }

  PhotoGallery.css = `
    .photo-gallery {
      display: grid;
      gap: 1rem;
      margin: 2rem 0;
    }

    .gallery-item {
      cursor: pointer;
      overflow: hidden;
      border-radius: 8px;
      aspect-ratio: 1;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(138, 43, 226, 0.2);
      transition: all 0.3s ease;
    }

    .gallery-item:hover {
      border-color: var(--holo-purple);
      box-shadow: 0 4px 16px rgba(138, 43, 226, 0.3);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .gallery-item:hover img {
      transform: scale(1.05);
    }

    .lightbox {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.95);
      z-index: 9999;
      align-items: center;
      justify-content: center;
    }

    .lightbox.active {
      display: flex;
    }

    .lightbox__image {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
    }

    .lightbox__close,
    .lightbox__prev,
    .lightbox__next {
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid var(--holo-cyan);
      color: var(--holo-cyan);
      font-size: 2rem;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 4px;
    }

    .lightbox__close:hover,
    .lightbox__prev:hover,
    .lightbox__next:hover {
      background: rgba(138, 43, 226, 0.3);
      border-color: var(--holo-purple);
    }

    .lightbox__close {
      top: 20px;
      right: 20px;
    }

    .lightbox__prev {
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .lightbox__next {
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }

    .lightbox__caption {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      padding: 1rem 2rem;
      border-radius: 4px;
      color: var(--holo-cyan);
      border: 1px solid var(--holo-cyan);
    }

    @media (max-width: 800px) {
      .photo-gallery {
        grid-template-columns: repeat(2, 1fr) !important;
      }

      .lightbox__prev,
      .lightbox__next {
        font-size: 1.5rem;
        width: 40px;
        height: 40px;
      }
    }
  `

  PhotoGallery.afterDOMLoaded = `
    document.addEventListener('nav', () => {
      const galleries = document.querySelectorAll('.photo-gallery')

      galleries.forEach(gallery => {
        const items = gallery.querySelectorAll('.gallery-item')
        const lightbox = gallery.querySelector('.lightbox')
        const lightboxImg = lightbox.querySelector('.lightbox__image')
        const lightboxCaption = lightbox.querySelector('.lightbox__caption')
        const closeBtn = lightbox.querySelector('.lightbox__close')
        const prevBtn = lightbox.querySelector('.lightbox__prev')
        const nextBtn = lightbox.querySelector('.lightbox__next')

        let currentIndex = 0

        const showImage = (index) => {
          currentIndex = index
          const item = items[index]
          const img = item.querySelector('img')
          lightboxImg.src = img.src
          lightboxImg.alt = img.alt
          lightboxCaption.textContent = img.alt
          lightbox.classList.add('active')
        }

        const hideImage = () => {
          lightbox.classList.remove('active')
        }

        const showNext = () => {
          currentIndex = (currentIndex + 1) % items.length
          showImage(currentIndex)
        }

        const showPrev = () => {
          currentIndex = (currentIndex - 1 + items.length) % items.length
          showImage(currentIndex)
        }

        // Click handlers
        items.forEach((item, index) => {
          item.addEventListener('click', () => showImage(index))
        })

        closeBtn.addEventListener('click', hideImage)
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation()
          showPrev()
        })
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation()
          showNext()
        })

        // Click outside to close
        lightbox.addEventListener('click', (e) => {
          if (e.target === lightbox) {
            hideImage()
          }
        })

        // Keyboard navigation
        const handleKeydown = (e) => {
          if (!lightbox.classList.contains('active')) return

          if (e.key === 'Escape') hideImage()
          if (e.key === 'ArrowLeft') showPrev()
          if (e.key === 'ArrowRight') showNext()
        }

        document.addEventListener('keydown', handleKeydown)
        window.addCleanup(() => {
          document.removeEventListener('keydown', handleKeydown)
        })
      })
    })
  `

  return PhotoGallery
}) satisfies QuartzComponentConstructor
