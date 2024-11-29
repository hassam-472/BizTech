
import { Link } from 'react-router-dom';
import { Building2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">BizTech</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              <Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link>
              <Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="text-gray-400 space-y-2">
              <p>123 Business Ave</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@biztech.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BizTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}