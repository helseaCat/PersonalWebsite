import SocialLinks from './SocialLinks'

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
        <SocialLinks size="sm" />
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Chelsea Scott. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
