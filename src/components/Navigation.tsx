import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const programs = [
    { name: 'Daycare Program', path: '/programs#daycare' },
    { name: 'Learning Program', path: '/programs#learning' },
    { name: 'After-School Program', path: '/programs#afterschool' },
    { name: 'Educator Training', path: '/programs#training' },
  ];

  return (
    <nav className="bg-card shadow-soft sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">DS</span>
            </div>
            <div className=" sm:block">
              <h1 className="text-xl font-bold text-foreground">Dr. Sofia's Daycare</h1>
              <p className="text-xs text-muted-foreground">& Learning Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors">
                Programs
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {programs.map((program) => (
                  <DropdownMenuItem key={program.path} asChild>
                    <Link to={program.path} className="cursor-pointer">
                      {program.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/story"
              className={`text-sm font-medium transition-colors ${
                isActive('/story') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Dr. Sofia's Story
            </Link>

            <Link
              to="/gallery"
              className={`text-sm font-medium transition-colors ${
                isActive('/gallery') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/team"
              className={`text-sm font-medium transition-colors ${
                isActive('/team') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Our Team
            </Link>

            <Link
              to="/testimonials"
              className={`text-sm font-medium transition-colors ${
                isActive('/testimonials') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Testimonials
            </Link>

            <Link
              to="/affiliations"
              className={`text-sm font-medium transition-colors ${
                isActive('/affiliations') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Affiliations
            </Link>

            <Button asChild variant="default" size="sm">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/programs"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/story"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Dr. Sofia's Story
              </Link>
              <Link
                to="/gallery"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/team"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </Link>
              <Link
                to="/testimonials"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/affiliations"
                className="text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Affiliations
              </Link>
              <Button asChild className="mx-2 mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;