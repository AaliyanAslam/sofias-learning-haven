import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Building2, Users, FileCheck, Heart, Star } from 'lucide-react';

const Affiliations = () => {
  const certifications = [
    {
      icon: FileCheck,
      name: 'Early Childhood Education Accreditation',
      issuer: 'Pakistan Education Board',
      description: 'Certified for maintaining high standards in early childhood education programs',
      year: '2023'
    },
    {
      icon: Award,
      name: 'Child Safety Excellence Award',
      issuer: 'Karachi Safety Council',
      description: 'Recognized for implementing comprehensive child safety protocols',
      year: '2022'
    },
    {
      icon: Star,
      name: 'Quality Childcare Provider',
      issuer: 'National Childcare Association',
      description: 'Certified for excellence in childcare services and professional standards',
      year: '2023'
    }
  ];

  const partnerships = [
    {
      icon: Building2,
      name: 'City School System',
      type: 'Educational Partnership',
      description: 'Collaboration for seamless transition of children to primary education',
      benefits: [
        'Student placement priority',
        'Curriculum alignment',
        'Teacher training exchange'
      ]
    },
    {
      icon: Users,
      name: 'Karachi Medical Center',
      type: 'Healthcare Partnership',
      description: 'Providing regular health checkups and emergency medical support',
      benefits: [
        'Regular health screenings',
        '24/7 medical consultation',
        'Emergency response protocols'
      ]
    },
    {
      icon: Heart,
      name: 'Child Development Institute',
      type: 'Research Partnership',
      description: 'Collaboration on child development research and best practices',
      benefits: [
        'Access to latest research',
        'Professional development',
        'Curriculum improvements'
      ]
    }
  ];

  const corporateClients = [
    {
      name: 'Engro Corporation',
      sector: 'Chemical & Fertilizers',
      services: 'Employee childcare services',
      partnership: 'Corporate daycare partnership since 2019'
    },
    {
      name: 'Lucky Cement',
      sector: 'Manufacturing',
      services: 'On-site childcare consultation',
      partnership: 'Workplace childcare advisory since 2020'
    },
    {
      name: 'Packages Limited',
      sector: 'Consumer Goods',
      services: 'Employee childcare benefits',
      partnership: 'Corporate childcare program since 2021'
    },
    {
      name: 'Habib Bank Limited',
      sector: 'Banking & Finance',
      services: 'Employee family support',
      partnership: 'Corporate partnership since 2018'
    }
  ];

  const communityPrograms = [
    {
      title: 'Free Community Workshops',
      description: 'Monthly parenting workshops open to the community',
      impact: '500+ families reached annually'
    },
    {
      title: 'Teacher Training Program',
      description: 'Professional development for daycare educators across Karachi',
      impact: '200+ educators trained'
    },
    {
      title: 'Child Safety Awareness',
      description: 'Community programs promoting child safety and protection',
      impact: '50+ schools visited'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Corporate Affiliations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building partnerships and maintaining certifications to provide the highest quality childcare services
          </p>
        </div>

        {/* Certifications & Awards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Certifications & Awards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    {cert.year}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Strategic Partnerships */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Strategic Partnerships
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <partner.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{partner.name}</CardTitle>
                      <p className="text-primary text-sm font-medium">{partner.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {partner.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Corporate Clients */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Corporate Clients
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateClients.map((client, index) => (
              <Card key={index} className="shadow-soft hover:shadow-warm transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-accent rounded-lg flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {client.name}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {client.sector}
                      </p>
                      <p className="text-muted-foreground text-sm mb-3">
                        <strong>Services:</strong> {client.services}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {client.partnership}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Interested in corporate childcare solutions for your organization?
            </p>
            <Button size="lg">
              Contact Our Corporate Team
            </Button>
          </div>
        </section>

        {/* Community Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Community Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityPrograms.map((program, index) => (
              <Card key={index} className="text-center shadow-soft">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {program.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium">
                    {program.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground shadow-soft">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Partner With Us
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our network of partners committed to excellence in childcare and early education
            </p>
            <div className="space-x-4">
              <Button variant="secondary" size="lg">
                Corporate Partnership
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Community Collaboration
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Affiliations;