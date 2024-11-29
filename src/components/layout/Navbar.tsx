import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Careers' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">BizTech</span>
            </Link>
          </div>
          
          {isMobile ? (
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${
                    isActive(path)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  isActive(path)
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

