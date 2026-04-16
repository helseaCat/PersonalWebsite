import SocialLinks from './SocialLinks'

function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center py-32 px-6 bg-linear-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:text-5xl">
          Hi, I'm Chelsea Scott
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Software Engineer building scalable AWS infrastructure with TypeScript
          and CDK. Passionate about reusable systems — from cloud
          constructs to rockets. Looking to bring my engineering skills to the
          New Space sector and help accelerate humanity's expansion into space. 🚀
        </p>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

export default Hero
