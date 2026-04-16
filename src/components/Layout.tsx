import Header from './Header'
import Footer from './Footer'
import StickyNote from './StickyNote'
import useDarkMode from '../hooks/useDarkMode'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const { isDark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Header isDark={isDark} toggleDarkMode={toggle} />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyNote />
    </div>
  )
}

export default Layout
