import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Heart, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sana Ejaz',
      profession: 'Banker',
      children: 'Hamdan (5 years)',
      rating: 5,
      quote: 'I would like to take this platform as an opportunity to thank Dr. Sofia\'s Daycare and Learning Center for bringing the best skills in Hamdan!!',
      fullReview: 'The transformation I\'ve seen in my son Hamdan has been incredible. The staff at Dr. Sofia\'s genuinely care about each child\'s development, and their personalized approach has helped Hamdan become more confident and articulate.',
      year: '2023'
    },
    {
      name: 'Ahmed Khan',
      profession: 'Software Engineer',
      children: 'Aisha (3 years), Omar (7 years)',
      rating: 5,
      quote: 'Exceptional care and education. Both my children have thrived at Dr. Sofia\'s, and I couldn\'t be happier with their progress.',
      fullReview: 'As working parents, finding a place where we can trust our children to be safe, happy, and learning was crucial. Dr. Sofia\'s exceeded all our expectations. The facilities are excellent, and the staff treats every child like their own.',
      year: '2023'
    },
    {
      name: 'Fatima Ahmed',
      profession: 'Doctor',
      children: 'Zara (4 years)',
      rating: 5,
      quote: 'Dr. Sofia\'s provides the perfect balance of care and education. My daughter loves going to school every day!',
      fullReview: 'The academic program is outstanding, but what sets Dr. Sofia\'s apart is their focus on emotional and social development. Zara has become more independent and confident since joining.',
      year: '2022'
    },
    {
      name: 'Muhammad Ali',
      profession: 'Business Owner',
      children: 'Hassan (6 years), Mariam (2 years)',
      rating: 5,
      quote: 'Outstanding facilities and caring staff. Dr. Sofia\'s has been like a second home for our children.',
      fullReview: 'The attention to detail in everything from nutrition to safety protocols gives us complete peace of mind. Both our children have different needs, and the staff adapts beautifully to each child\'s personality.',
      year: '2023'
    },
    {
      name: 'Ayesha Rahman',
      profession: 'Marketing Manager',
      children: 'Saad (5 years)',
      rating: 5,
      quote: 'The after-school program has been a lifesaver for our family. Saad gets homework help and still has time for fun activities.',
      fullReview: 'Working late hours was always a concern until we found Dr. Sofia\'s after-school program. Saad is always excited to share what he learned each day, and his academic performance has improved significantly.',
      year: '2023'
    },
    {
      name: 'Rashid Malik',
      profession: 'Teacher',
      children: 'Laiba (3 years)',
      rating: 5,
      quote: 'As an educator myself, I appreciate the high standards and professional approach at Dr. Sofia\'s.',
      fullReview: 'The curriculum is well-structured and age-appropriate. I\'ve observed other daycare centers, but none match the quality of education and care provided here. Laiba\'s language skills have developed remarkably.',
      year: '2022'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '98%',
      label: 'Parent Satisfaction Rate',
      description: 'Based on our annual parent survey'
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Average Rating',
      description: 'From verified parent reviews'
    },
    {
      icon: Heart,
      number: '15+',
      label: 'Years of Trust',
      description: 'Building relationships with families'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Parents Say
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Read testimonials from families who trust Dr. Sofia's Daycare with their most precious ones
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-shadow">
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary-light absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                  <Badge variant="outline" className="ml-2">
                    {testimonial.year}
                  </Badge>
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg font-medium text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Full Review */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.fullReview}
                </p>
                
                {/* Author Info */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-secondary rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-foreground">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    {/* Details */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary font-medium">
                        {testimonial.profession}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Parent of {testimonial.children}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground shadow-soft">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Join Our Family?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the same exceptional care and education that these families trust. Schedule a visit to see our facilities and meet our team.
            </p>
            <div className="space-x-4">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Schedule a Visit
              </a>
              <a
                href="tel:+92-XXX-XXXXXXX"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
              >
                Call Us Today
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Review Form Section */}
        <div className="mt-16">
          <Card className="shadow-soft">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Share Your Experience
              </h3>
              <p className="text-muted-foreground mb-6">
                Are you a current or former parent? We'd love to hear about your experience with Dr. Sofia's Daycare.
              </p>
              <a
                href="mailto:feedback@drsofia-daycare.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Submit Your Review
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;