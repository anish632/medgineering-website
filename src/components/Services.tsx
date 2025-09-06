export default function Services() {
  const services = [
    {
      icon: '🔧',
      title: 'Medical Device Engineering',
      description: 'Complete product development lifecycle from concept to commercialization.',
      features: ['Design & Prototyping', 'Testing & Validation', 'Regulatory Compliance', 'Manufacturing Support']
    },
    {
      icon: '📊',
      title: 'Healthcare Technology Consulting',
      description: 'Strategic guidance for healthcare organizations implementing new technologies.',
      features: ['Technology Assessment', 'Implementation Planning', 'Risk Management', 'ROI Analysis']
    },
    {
      icon: '🔬',
      title: 'Research & Development',
      description: 'Innovation-driven R&D services for next-generation medical solutions.',
      features: ['Clinical Research', 'Feasibility Studies', 'Patent Research', 'Technology Transfer']
    },
    {
      icon: '📋',
      title: 'Regulatory Affairs',
      description: 'Navigate complex regulatory requirements for medical device approval.',
      features: ['FDA Submissions', 'CE Marking', 'Quality Systems', 'Clinical Trials']
    },
    {
      icon: '⚙️',
      title: 'Manufacturing Support',
      description: 'End-to-end manufacturing solutions for medical device production.',
      features: ['Process Design', 'Quality Control', 'Supply Chain', 'Scale-up Support']
    },
    {
      icon: '🎯',
      title: 'Project Management',
      description: 'Expert project leadership ensuring on-time, on-budget delivery.',
      features: ['Timeline Management', 'Resource Planning', 'Risk Mitigation', 'Stakeholder Communication']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Medical Engineering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end engineering solutions to help healthcare organizations 
            and medical device companies achieve their innovation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 hover:bg-blue-50 p-8 rounded-xl transition-all hover:shadow-lg">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
