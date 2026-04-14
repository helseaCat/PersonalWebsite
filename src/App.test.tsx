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
    expect(screen.getByText(/Chelsea Scott/i)).toBeInTheDocument()
  })
})
