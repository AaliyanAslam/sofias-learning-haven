import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, GraduationCap, BookOpen, Star, Award } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 'daycare',
      title: 'Daycare Program',
      icon: Users,
      age: '40 Days - 12 Years',
      description: 'Our comprehensive daycare program provides a safe, nurturing environment where children can learn, play, and grow. We focus on developing social skills, emotional intelligence, and preparing children for their educational journey.',
      features: [
        'Safe and secure environment',
        'Nutritious meals and snacks',
        'Age-appropriate activities',
        'Qualified and caring staff',
        'Flexible scheduling options',
        'Daily progress reports'
      ],
      schedule: 'Monday - Friday: 7:00 AM - 7:00 PM',
      color: 'bg-primary-light'
    },
    {
      id: 'learning',
      title: 'Learning Program',
      icon: GraduationCap,
      age: '2 - 6 Years',
      description: 'Our structured learning program combines play-based learning with academic preparation. Children develop literacy, numeracy, and critical thinking skills in a fun and engaging environment.',
      features: [
        'Pre-literacy and numeracy skills',
        'Creative arts and crafts',
        'Science exploration',
        'Music and movement',
        'Social skill development',
        'School readiness preparation'
      ],
      schedule: 'Monday - Friday: 8:00 AM - 2:00 PM',
      color: 'bg-secondary'
    },
    {
      id: 'afterschool',
      title: 'After-School Program',
      icon: BookOpen,
      age: '5 - 12 Years',
      description: 'Perfect for school-age children, our after-school program provides homework assistance, recreational activities, and continued learning in a supportive environment.',
      features: [
        'Homework help and tutoring',
        'Educational games and activities',
        'Sports and physical activities',
        'Arts and crafts projects',
        'Healthy snacks provided',
        'Pick-up service from select schools'
      ],
      schedule: 'Monday - Friday: 2:30 PM - 7:00 PM',
      color: 'bg-accent'
    },
    {
      id: 'training',
      title: "Educator's Training Program",
      icon: Award,
      age: 'Adults',
      description: 'We offer professional development opportunities for childcare providers and educators, sharing our expertise and best practices in early childhood education.',
      features: [
        'Early childhood development training',
        'Classroom management techniques',
        'Child safety and first aid',
        'Curriculum development',
        'Professional certification',
        'Ongoing mentorship support'
      ],
      schedule: 'Weekends and Evening Sessions Available',
      color: 'bg-primary-light'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs designed to nurture, educate, and inspire children at every stage of their development
          </p>
        </div>

        {/* Programs Grid */}
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div key={program.id} id={program.id} className="scroll-mt-20">
              <Card className="overflow-hidden shadow-soft hover:shadow-warm transition-shadow">
                <div className={`h-2 ${program.color}`} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Program Info */}
                  <div className="lg:col-span-2">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center`}>
                          <program.icon className="h-8 w-8 text-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl md:text-3xl text-foreground">
                            {program.title}
                          </CardTitle>
                          <p className="text-lg text-primary font-medium">
                            Ages: {program.age}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <p className="text-lg text-muted-foreground mb-6">
                        {program.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <Star className="h-5 w-5 text-primary mr-2" />
                          Program Features
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {program.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>

                  {/* Schedule & CTA */}
                  <div className="lg:col-span-1">
                    <Card className="bg-muted border-0">
                      <CardContent className="p-6">
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                            <Clock className="h-5 w-5 text-primary mr-2" />
                            Schedule
                          </h4>
                          <p className="text-muted-foreground">
                            {program.schedule}
                          </p>
                        </div>
                        
                        <div className="space-y-3">
                          <Button className="w-full" size="lg">
                            Enroll Now
                          </Button>
                          <Button variant="outline" className="w-full">
                            Schedule a Visit
                          </Button>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-sm text-muted-foreground text-center">
                            Questions about this program?
                          </p>
                          <Button variant="link" className="w-full mt-2 p-0">
                            Contact Our Team
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our programs and schedule a tour of our facilities
              </p>
              <div className="space-x-4">
                <Button variant="secondary" size="lg">
                  Schedule a Tour
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Call Us Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Programs;