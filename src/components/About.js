// src/components/About.tsx
export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation-Driven",
      description: "We leverage cutting-edge technology and engineering principles to develop breakthrough medical solutions."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Clinical Excellence",
      description: "Our solutions are developed with deep understanding of clinical workflows and patient needs."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Regulatory Compliance",
      description: "We ensure all our solutions meet the highest regulatory standards and safety requirements."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About MedGineering
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of dedicated engineers and healthcare professionals committed to 
            transforming medical technology through innovative engineering solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Bridging Engineering and Healthcare
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with the vision of improving healthcare outcomes through advanced engineering, 
              MedGineering specializes in developing innovative medical devices, systems, and solutions 
              that address real-world clinical challenges.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our multidisciplinary team combines expertise in biomedical engineering, mechanical design, 
              software development, and regulatory affairs to deliver comprehensive solutions that meet 
              the evolving needs of healthcare providers and patients.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">ISO 13485</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">FDA</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            To advance healthcare through innovative engineering solutions that improve patient outcomes, 
            enhance clinical efficiency, and make medical technology more accessible worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
