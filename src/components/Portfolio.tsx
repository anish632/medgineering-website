export default function Portfolio() {
  const projects = [
    {
      title: 'Cardiac Monitoring Device',
      category: 'Medical Device',
      description: 'Next-generation wearable cardiac monitor with real-time data transmission and AI-powered analysis.',
      image: '/api/placeholder/400/300',
      tags: ['IoT', 'Wearables', 'Cardiology']
    },
    {
      title: 'Surgical Navigation System',
      category: 'Healthcare Technology',
      description: 'Advanced 3D navigation system for minimally invasive surgical procedures with enhanced precision.',
      image: '/api/placeholder/400/300',
      tags: ['Surgery', '3D Imaging', 'Navigation']
    },
    {
      title: 'Rehabilitation Robotics',
      category: 'Robotics',
      description: 'Intelligent rehabilitation robot system for physical therapy with adaptive learning capabilities.',
      image: '/api/placeholder/400/300',
      tags: ['Robotics', 'AI', 'Rehabilitation']
    },
    {
      title: 'Diagnostic Imaging Platform',
      category: 'Imaging',
      description: 'Cloud-based diagnostic imaging platform with machine learning-powered analysis and reporting.',
      image: '/api/placeholder/400/300',
      tags: ['Cloud', 'Machine Learning', 'Diagnostics']
    },
    {
      title: 'Telemedicine Infrastructure',
      category: 'Digital Health',
      description: 'Comprehensive telemedicine platform enabling remote patient monitoring and consultation.',
      image: '/api/placeholder/400/300',
      tags: ['Telemedicine', 'Remote Monitoring', 'Platform']
    },
    {
      title: 'Medical Data Analytics',
      category: 'Data Science',
      description: 'Advanced analytics platform for clinical decision support and population health management.',
      image: '/api/placeholder/400/300',
      tags: ['Analytics', 'Big Data', 'Clinical Decision']
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Innovation in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful medical engineering projects that have 
            transformed healthcare delivery and improved patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              {/* Placeholder for project image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-4xl text-blue-600">🔬</div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how our medical engineering expertise can help bring your 
              healthcare innovation to life.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
