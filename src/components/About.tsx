export default function About() {
  const features = [
    {
      icon: '🏥',
      title: 'Healthcare Innovation',
      description: 'Cutting-edge solutions for modern healthcare challenges and medical device development.'
    },
    {
      icon: '🔬',
      title: 'Research & Development',
      description: 'Evidence-based engineering solutions with rigorous testing and validation protocols.'
    },
    {
      icon: '⚡',
      title: 'Rapid Prototyping',
      description: 'Fast iteration cycles to bring medical innovations from concept to reality quickly.'
    },
    {
      icon: '🛡️',
      title: 'Compliance & Safety',
      description: 'Full regulatory compliance ensuring the highest safety standards for all medical devices.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading Medical Engineering Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              MEDGineering combines decades of medical device expertise with cutting-edge engineering 
              to deliver innovative healthcare solutions. Our team of experienced engineers and medical 
              professionals work collaboratively to advance patient care through technology.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From concept development to regulatory approval, we provide comprehensive engineering 
              services that help healthcare organizations and medical device companies bring 
              life-changing innovations to market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                View Case Studies
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
