
import { ArrowRight, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with Technology
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              We deliver innovative solutions that drive growth and success
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600">We bring excellence to every project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
                title: 'Quality Assured',
                description: 'We maintain the highest standards in all our deliverables'
              },
              {
                icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
                title: 'Growth Focused',
                description: 'Solutions designed to scale with your business'
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: 'Expert Team',
                description: 'Skilled professionals with years of industry experience'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}