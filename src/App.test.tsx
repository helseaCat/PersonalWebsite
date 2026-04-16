import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from './App'

beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('App', () => {
  it('renders the welcome heading', () => {
    render(<App />)
    expect(screen.getByText('Welcome!')).toBeInTheDocument()
  })

  it('renders the intro paragraph', () => {
    render(<App />)
    expect(screen.getByText(/a lot of programming projects/i)).toBeInTheDocument()
  })

  it('renders the header with site name', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Chelsea Scott' })).toBeInTheDocument()
  })

  it('renders the desktop navigation links', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()
    expect(nav.querySelectorAll('a')).toHaveLength(3)
  })

  it('renders the mobile menu toggle button', () => {
    render(<App />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens mobile nav when hamburger is clicked', () => {
    render(<App />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav.querySelectorAll('a')).toHaveLength(3)
  })

  it('renders the footer with copyright', () => {
    render(<App />)
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })

  it('renders the About section', () => {
    render(<App />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('renders the Projects section with project cards', () => {
    render(<App />)
    expect(screen.getByText('Project One')).toBeInTheDocument()
    expect(screen.getByText('Project Two')).toBeInTheDocument()
    expect(screen.getByText('Project Three')).toBeInTheDocument()
  })

  it('renders the Contact section with form', () => {
    render(<App />)
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('renders the dark mode toggle', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
  })

  it('toggles dark mode when clicked', () => {
    render(<App />)
    const toggle = screen.getByRole('button', { name: /switch to dark mode/i })
    fireEvent.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
  })

  it('persists dark mode preference to localStorage', () => {
    render(<App />)
    const toggle = screen.getByRole('button', { name: /switch to dark mode/i })
    fireEvent.click(toggle)
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})
