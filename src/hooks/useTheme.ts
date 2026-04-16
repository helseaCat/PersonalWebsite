import { useState, useEffect } from 'react'

export type ThemeName = 'default' | 'bubblegum' | 'gothic' | 'cyberpunk'

const STORAGE_KEY = 'secret-theme'

const themes: Record<ThemeName, Record<string, string>> = {
  default: {},
  bubblegum: {
    '--theme-bg': '#fff0f6',
    '--theme-bg-alt': '#ffe0ec',
    '--theme-bg-dark': '#4a0025',
    '--theme-bg-dark-alt': '#6b003a',
    '--theme-text': '#d6336c',
    '--theme-text-muted': '#e64980',
    '--theme-heading': '#a61e4d',
    '--theme-heading-dark': '#fcc2d7',
    '--theme-accent': '#f06595',
    '--theme-border': '#fcc2d7',
    '--theme-border-dark': '#862e4d',
    '--theme-card': '#fff0f6',
    '--theme-card-dark': '#5c0030',
    '--theme-tag': '#ffe0ec',
    '--theme-tag-dark': '#862e4d',
  },
  gothic: {
    '--theme-bg': '#1a1a2e',
    '--theme-bg-alt': '#16213e',
    '--theme-bg-dark': '#0f0f1a',
    '--theme-bg-dark-alt': '#0a0a12',
    '--theme-text': '#8b8ba3',
    '--theme-text-muted': '#6b6b85',
    '--theme-heading': '#e0e0e8',
    '--theme-heading-dark': '#c8c8d8',
    '--theme-accent': '#9b2335',
    '--theme-border': '#2a2a4a',
    '--theme-border-dark': '#1a1a30',
    '--theme-card': '#16213e',
    '--theme-card-dark': '#0f0f1a',
    '--theme-tag': '#2a2a4a',
    '--theme-tag-dark': '#1a1a30',
  },
  cyberpunk: {
    '--theme-bg': '#0a0a1a',
    '--theme-bg-alt': '#0f0f2a',
    '--theme-bg-dark': '#050510',
    '--theme-bg-dark-alt': '#020208',
    '--theme-text': '#00e5ff',
    '--theme-text-muted': '#00b8d4',
    '--theme-heading': '#ff2d95',
    '--theme-heading-dark': '#ff6db8',
    '--theme-accent': '#ffea00',
    '--theme-border': '#1a1a3a',
    '--theme-border-dark': '#0f0f20',
    '--theme-card': '#0f0f2a',
    '--theme-card-dark': '#0a0a1a',
    '--theme-tag': '#1a1a3a',
    '--theme-tag-dark': '#0f0f20',
  },
}

function useTheme() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return (stored as ThemeName) || 'default'
  })

  useEffect(() => {
    const root = document.documentElement
    const vars = themes[theme]

    // Clear previous theme vars
    Object.keys(themes.bubblegum).forEach((key) => {
      root.style.removeProperty(key)
    })

    // Apply new theme vars
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

    if (theme === 'default') {
      root.removeAttribute('data-theme')
      localStorage.removeItem(STORAGE_KEY)
    } else {
      root.setAttribute('data-theme', theme)
      localStorage.setItem(STORAGE_KEY, theme)
    }
  }, [theme])

  const activateTheme = (input: string): boolean => {
    const normalized = input.trim().toLowerCase()
    if (normalized in themes && normalized !== 'default') {
      setTheme(normalized as ThemeName)
      return true
    }
    if (normalized === 'reset') {
      setTheme('default')
      return true
    }
    return false
  }

  return { theme, activateTheme }
}

export default useTheme
