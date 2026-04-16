function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center py-32 px-6 bg-linear-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:text-5xl">
          Welcome!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          My name is Chelsea Scott and I do a lot of programming projects and I
          am very happy that you are here! Explore around but notice that this
          page is still very much a work in progress!
        </p>
      </div>
    </section>
  )
}

export default Hero
