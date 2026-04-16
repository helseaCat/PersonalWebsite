import { useState, useEffect } from 'react'
import useTheme from '../hooks/useTheme'

const STORAGE_KEY = 'visitor-note'

function StickyNote() {
  const [isOpen, setIsOpen] = useState(false)
  const [note, setNote] = useState(() => localStorage.getItem(STORAGE_KEY) ?? '')
  const [easterEggMsg, setEasterEggMsg] = useState<string | null>(null)
  const [toastFading, setToastFading] = useState(false)
  const { theme, activateTheme } = useTheme()

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, note)
  }, [note])

  const showToast = (msg: string) => {
    setEasterEggMsg(msg)
    setToastFading(false)
    setTimeout(() => setToastFading(true), 2000)
    setTimeout(() => {
      setEasterEggMsg(null)
      setToastFading(false)
    }, 3000)
  }

  const handleClear = () => {
    const activated = activateTheme(note)
    if (activated) {
      const name = note.trim().toLowerCase()
      showToast(name === 'reset' ? '🔄 Theme reset!' : `✨ ${name} mode activated!`)
    }
    setNote('')
  }

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 bg-yellow-400 dark:bg-yellow-500 text-gray-900 rounded-full shadow-lg hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-colors"
        aria-label="Open sticky note"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>

      {/* Easter egg toast */}
      {easterEggMsg && (
        <div className={`fixed bottom-20 right-6 z-50 px-4 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg shadow-lg text-sm font-medium animate-bounce transition-opacity duration-1000 ${toastFading ? 'opacity-0' : 'opacity-100'}`}>
          {easterEggMsg}
        </div>
      )}

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false)
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Sticky note"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                📝 Leave a note
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                aria-label="Close sticky note"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Drop a note here and I'll keep it for when you get back!
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
              Saved locally in your browser — nothing leaves your device.
            </p>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Type something..."
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-yellow-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-500 focus:border-transparent resize-none"
              aria-label="Your note"
            />
            <div className="flex items-center justify-between mt-3">
              {note && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  Clear note
                </button>
              )}
              {theme !== 'default' && (
                <button
                  type="button"
                  onClick={() => {
                    activateTheme('reset')
                    showToast('🔄 Theme reset!')
                  }}
                  className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors ml-auto"
                >
                  🎨 {theme} — reset
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default StickyNote
