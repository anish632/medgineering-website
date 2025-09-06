export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About MEDGineering</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the future of healthcare through innovative medical engineering solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At MEDGineering, we specialize in bridging the critical gap between medical innovation 
              and practical healthcare implementation. Our team of experienced medical engineers 
              provides comprehensive consulting services to healthcare organizations, medical device 
              manufacturers, and research institutions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We combine deep technical expertise with real-world healthcare experience to deliver 
              solutions that improve patient outcomes, streamline operations, and drive innovation 
              in the medical field.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-lg p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Innovation</h4>
              </div>
              <p className="text-gray-600">Cutting-edge solutions that push the boundaries of medical technology</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 rounded-lg p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Quality</h4>
              </div>
              <p className="text-gray-600">Rigorous standards ensuring the highest quality in every project</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 rounded-lg p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Expertise</h4>
              </div>
              <p className="text-gray-600">Deep domain knowledge from industry-leading professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
