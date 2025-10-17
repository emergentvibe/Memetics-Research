import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.CustomNav(),
    Component.Search(),
  ],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/emergentvibe",
      Substack: "https://emergentvibe.substack.com/",
      "X (Twitter)": "https://x.com/emergentvibe",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.CustomHomepage(), // Custom homepage (only renders on index)
    Component.SoftwareGrid(), // Software grid (only renders on software page)
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.PhotoGallery(),
  ],
  left: [],
  right: [
    Component.BuyMeCoffee(),
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.SocialLinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  left: [],
  right: [
    Component.BuyMeCoffee(),
    Component.Graph(),
    Component.Backlinks(),
    Component.SocialLinks(),
  ],
}
