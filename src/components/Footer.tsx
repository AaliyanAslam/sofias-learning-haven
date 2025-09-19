import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Team', path: '/team' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const locations = [
    'Nazimabad',
    'North Nazimabad', 
    'Gulshan-e-Iqbal',
    'Gulistan-e-Johar',
    'Bahadurabad'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-lg">DS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Dr. Sofia's Daycare</h3>
                <p className="text-sm opacity-90">& Learning Center</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Committed to providing safe, stimulating, and caring environment for children since 2007.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location} className="flex items-center space-x-2">
                  <MapPin className="h-3 w-3 opacity-60" />
                  <span className="text-sm opacity-80">{location}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-60" />
                <span className="text-sm opacity-80">+92-XXX-XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-60" />
                <span className="text-sm opacity-80">info@drsofia-daycare.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 opacity-60 mt-0.5" />
                <span className="text-sm opacity-80">
                  Main Branch: Nazimabad<br />
                  Karachi, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Dr. Sofia's Daycare and Learning Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;