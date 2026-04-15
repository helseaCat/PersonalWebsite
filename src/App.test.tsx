import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

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

  it('renders the navigation links', () => {
    render(<App />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the footer with copyright', () => {
    render(<App />)
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })
})
