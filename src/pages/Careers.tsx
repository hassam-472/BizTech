import { useState } from 'react';
import { MapPin, DollarSign, Clock, X } from 'lucide-react';

interface Job {
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
}

export function Careers() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const jobs: Job[] = [
    {
      title: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'We\'re looking for an experienced software engineer to join our team and help build scalable, high-performance applications. You\'ll work on challenging projects and collaborate with a talented team of developers.'
    },
    {
      title: 'Product Manager',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $150k',
      description: 'Seeking a product manager to lead our product development initiatives, define product strategy, and work closely with cross-functional teams to deliver outstanding user experiences.'
    },
    {
      title: 'UX Designer',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $130k',
      description: 'Join our design team to create beautiful and intuitive interfaces. You\'ll be responsible for user research, wireframing, prototyping, and collaborating with developers to bring designs to life.'
    },
    {
      title: 'Data Scientist',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$110k - $160k',
      description: 'We\'re looking for a data scientist to help us extract insights from complex datasets, develop machine learning models, and drive data-informed decision making across the organization.'
    }
  ];

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setIsPopupOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsPopupOpen(false);
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Innovative Team</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Build your career with a company that values innovation, growth, and making a positive impact in the world.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and career advancement paths tailored to your goals and interests.'
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible schedules, remote work options, and generous paid time off to help you thrive both in and out of work.'
              },
              {
                title: 'Comprehensive Benefits',
                description: 'Competitive salary, health insurance, 401(k) matching, stock options, and more to support your well-being.'
              },
              {
                title: 'Collaborative Culture',
                description: 'Work alongside passionate individuals in a supportive environment that fosters creativity and teamwork.'
              },
              {
                title: 'Cutting-Edge Technology',
                description: 'Access to the latest tools and technologies to help you do your best work and stay ahead in your field.'
              },
              {
                title: 'Social Responsibility',
                description: 'Be part of a company committed to making a positive impact through various social and environmental initiatives.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-blue-600">{job.title}</h3>
                  <button 
                    onClick={() => handleApply(job)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Apply Now
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-blue-500" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                    {job.salary}
                  </div>
                </div>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Popup */}
      {isPopupOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
            <button 
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Apply for {selectedJob.title}</h2>
            {formStatus === 'success' ? (
              <div className="text-green-600 font-semibold">
                Your application has been submitted successfully!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
                  <input type="file" id="resume" name="resume" required className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                  "/>
                </div>
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
                  <textarea id="coverLetter" name="coverLetter" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

