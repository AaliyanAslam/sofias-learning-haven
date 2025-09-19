import { Card, CardContent } from '@/components/ui/card';
import { Award, Heart, Users, Star } from 'lucide-react';

const Story = () => {
  const milestones = [
    {
      year: '1990',
      title: 'The Beginning',
      description: 'Dr. Sofia started her journey in early childhood education with a passion for nurturing young minds.'
    },
    {
      year: '1995',
      title: 'First Classroom',
      description: 'Opened her first small classroom facility, providing quality care for local families.'
    },
    {
      year: '2000',
      title: 'Expanding Vision',
      description: 'Recognized the need for comprehensive daycare services in Karachi and began planning expansion.'
    },
    {
      year: '2005',
      title: 'Professional Training',
      description: 'Completed advanced certifications in early childhood development and learning methodologies.'
    },
    {
      year: '2007',
      title: 'Dr. Sofia\'s Daycare Opens',
      description: 'Officially established the first private daycare with learning center in Karachi, serving working families.'
    },
    {
      year: '2010',
      title: 'Multiple Locations',
      description: 'Expanded to serve families across different areas of Karachi with multiple branch locations.'
    },
    {
      year: '2015',
      title: 'Award Recognition',
      description: 'Received recognition for excellence in childcare services and contribution to early childhood education.'
    },
    {
      year: 'Today',
      title: 'Continuing Legacy',
      description: 'Serving hundreds of families with unwavering commitment to quality childcare and education.'
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: '1000+ Children Served',
      description: 'Over a thousand children have benefited from our care and educational programs'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Acknowledged as a leader in early childhood education in Karachi'
    },
    {
      icon: Heart,
      title: 'Community Trust',
      description: 'Built lasting relationships with families spanning multiple generations'
    },
    {
      icon: Star,
      title: 'Excellence in Care',
      description: 'Maintained highest standards of childcare for over 15 years'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dr. Sofia's Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of dedication, passion, and unwavering commitment to early childhood education
          </p>
        </div>

        {/* Hero Section */}
        <Card className="mb-16 shadow-soft">
          <CardContent className="p-12 text-center">
            <div className="w-32 h-32 bg-primary-light rounded-full mx-auto mb-8 flex items-center justify-center">
              <Heart className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              From Vision to Reality: 1990 to 2007
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Dr. Sofia's journey began in 1990 with a simple yet powerful vision: to create a safe, 
              nurturing environment where children could learn, grow, and thrive. Over 17 years of 
              dedication, research, and hands-on experience in early childhood development culminated 
              in the establishment of Karachi's first private daycare with learning center in 2007.
            </p>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Journey Through the Years
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-light"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year === 'Today' ? '★' : milestone.year.slice(-2)}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1 shadow-soft hover:shadow-warm transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-sm font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <Card className="bg-primary text-primary-foreground shadow-soft">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl opacity-90 mb-6">
                "Every child is unique and deserves an environment that celebrates their individuality 
                while providing the foundation for lifelong learning and success."
              </p>
              <p className="text-lg opacity-80">
                This belief has guided Dr. Sofia and her team for over 15 years, shaping every program, 
                every interaction, and every decision made at our learning centers. We are committed to 
                continuing this legacy of excellence for generations to come.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Story;