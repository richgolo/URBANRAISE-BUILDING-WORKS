import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site.js'

function setMeta(selector, attr, value) {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    const [, name] = selector.match(/\[(?:name|property)="(.+)"\]/) || []
    tag.setAttribute(selector.includes('property=') ? 'property' : 'name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute(attr, value)
}

/**
 * Sets <title> plus the description / canonical / Open-Graph tags for a page.
 * Keeps the name `useDocumentTitle` so existing call sites stay unchanged.
 */
export function useDocumentTitle(title, description) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title
      ? `${title} · ${site.name}`
      : `${site.name} — ${site.tagline}`
    const desc = description || site.description
    const canonical = `${site.url}${pathname === '/' ? '' : pathname}`

    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', desc)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', desc)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', desc)

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }, [title, description, pathname])
}
