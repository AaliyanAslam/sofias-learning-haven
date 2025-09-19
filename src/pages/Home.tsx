import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, GraduationCap, Heart, Star, Shield } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';

const Home = () => {
  const quickLinks = [
    {
      title: 'Programs',
      description: 'Explore our comprehensive daycare and learning programs',
      icon: GraduationCap,
      path: '/programs',
      color: 'bg-primary-light'
    },
    {
      title: 'Gallery',
      description: 'See our facilities and happy children in action',
      icon: Users,
      path: '/gallery',
      color: 'bg-secondary'
    },
    {
      title: 'Our Team',
      description: 'Meet our qualified and caring staff members',
      icon: Heart,
      path: '/team',
      color: 'bg-accent'
    },
    {
      title: 'Testimonials',
      description: 'Read what parents say about our services',
      icon: Star,
      path: '/testimonials',
      color: 'bg-primary-light'
    }
  ];

  const locations = [
    'Nazimabad',
    'North Nazimabad',
    'Gulshan-e-Iqbal',
    'Gulistan-e-Johar',
    'Bahadurabad'
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Secure and child-friendly facilities with trained safety protocols'
    },
    {
      icon: GraduationCap,
      title: 'Educational Excellence',
      description: 'Comprehensive learning programs designed for optimal development'
    },
    {
      icon: Heart,
      title: 'Caring Staff',
      description: 'Qualified professionals dedicated to your child\'s wellbeing'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Dr. Sofia's Daycare & Learning Center
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                We are the first private Daycare with Learning Center in Karachi since 2007. 
                Dr. Sofia's Daycare and Learning Center is committed to provide a safe, stimulating, 
                and caring environment for children ages 40 Days up to 12 years.
              </p>
              <p className="text-lg text-muted-foreground">
                Our comprehensive approach combines professional childcare with educational excellence, 
                ensuring your child receives the best possible start in their learning journey.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore what makes Dr. Sofia's Daycare the trusted choice for families across Karachi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {link.description}
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={link.path}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Conveniently located across Karachi to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((location, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{location}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/contact">Find a Location Near You</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Give Your Child the Best Start?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the hundreds of families who trust Dr. Sofia's Daycare with their most precious ones
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;