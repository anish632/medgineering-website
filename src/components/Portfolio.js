export default function Portfolio() {
  const projects = [
    {
      title: 'Advanced Imaging System',
      category: 'Medical Device Development',
      description: 'Next-generation medical imaging platform with AI-enhanced diagnostics.',
      image: '/logo400.png',
      tags: ['FDA Approved', 'AI Integration', 'Clinical Trials']
    },
    {
      title: 'Hospital Management Platform',
      category: 'Healthcare Technology',
      description: 'Comprehensive digital solution for hospital operations and patient care.',
      image: '/logo400.png',
      tags: ['Cloud-based', 'HIPAA Compliant', 'Multi-facility']
    },
    {
      title: 'Surgical Navigation System',
      category: 'Clinical Engineering',
      description: 'Precision guidance system for minimally invasive surgical procedures.',
      image: '/logo400.png',
      tags: ['Real-time Tracking', 'Sterile Design', 'OR Integration']
    },
    {
      title: 'Remote Patient Monitoring',
      category: 'Digital Health',
      description: 'IoT-enabled remote monitoring solution for chronic disease management.',
      image: '/logo400.png',
      tags: ['IoT Sensors', 'Mobile App', 'Data Analytics']
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our successful medical engineering projects and innovations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <div className="text-sm font-medium opacity-90">{project.category}</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
