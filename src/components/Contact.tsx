function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-10">
          Have a question or want to work together? Feel free to reach out.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 text-left"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
