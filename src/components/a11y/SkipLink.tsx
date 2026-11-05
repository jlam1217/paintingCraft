'use client'

import { useEffect } from 'react'

export function SkipLink() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .skip-link {
        position: absolute;
        left: -9999px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
        z-index: 9999;
      }
      .skip-link:focus {
        position: static;
        width: auto;
        height: auto;
        padding: 1rem;
        background: var(--color-cobalt);
        color: var(--color-sand);
        border-radius: 4px;
        z-index: 9999;
        margin: 1rem;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <a
      href="#main-content"
      className="skip-link"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  )
}
