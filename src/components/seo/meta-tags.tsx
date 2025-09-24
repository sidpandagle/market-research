import { useEffect } from "react"

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  ogType?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonical?: string
  noindex?: boolean
}

export function MetaTags({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  noindex = false,
}: MetaTagsProps) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? "property" : "name"
      let element = document.querySelector(`meta[${attribute}="${name}"]`)

      if (!element) {
        element = document.createElement("meta")
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }

      element.setAttribute("content", content)
    }

    // Helper function to update link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`)

      if (!element) {
        element = document.createElement("link")
        element.setAttribute("rel", rel)
        document.head.appendChild(element)
      }

      element.setAttribute("href", href)
    }

    // Update meta description
    if (description) {
      updateMetaTag("description", description)
    }

    // Update keywords
    if (keywords && keywords.length > 0) {
      updateMetaTag("keywords", keywords.join(", "))
    }

    // Update robots
    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow")
    } else {
      updateMetaTag("robots", "index, follow")
    }

    // Update Open Graph tags
    if (ogTitle) {
      updateMetaTag("og:title", ogTitle, true)
    }
    if (ogDescription) {
      updateMetaTag("og:description", ogDescription, true)
    }
    if (ogImage) {
      updateMetaTag("og:image", ogImage, true)
    }
    if (ogUrl) {
      updateMetaTag("og:url", ogUrl, true)
    }
    updateMetaTag("og:type", ogType, true)

    // Update Twitter Card tags
    updateMetaTag("twitter:card", twitterCard)
    if (twitterTitle) {
      updateMetaTag("twitter:title", twitterTitle)
    }
    if (twitterDescription) {
      updateMetaTag("twitter:description", twitterDescription)
    }
    if (twitterImage) {
      updateMetaTag("twitter:image", twitterImage)
    }

    // Update canonical URL
    if (canonical) {
      updateLinkTag("canonical", canonical)
    }

  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonical,
    noindex,
  ])

  return null
}