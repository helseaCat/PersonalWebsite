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
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(nav.querySelectorAll('a')).toHaveLength(3)
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
})
