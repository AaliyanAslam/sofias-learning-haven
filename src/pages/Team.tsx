import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Award, Users, Heart, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sofia Ahmed',
      designation: 'Founder & Director',
      qualifications: 'Ph.D. in Early Childhood Education',
      experience: '25+ years',
      specialization: 'Child Development & Learning',
      bio: 'Dr. Sofia founded the center with a vision to provide the highest quality childcare and early education. Her extensive experience and passion for child development has made our center a trusted choice for families.',
      email: 'sofia@drsofia-daycare.com',
      phone: '+92-XXX-XXXXXXX'
    },
    {
      name: 'Ms. Ayesha Khan',
      designation: 'Head of Academics',
      qualifications: 'M.Ed. in Early Childhood Education',
      experience: '12+ years',
      specialization: 'Curriculum Development',
      bio: 'Ayesha oversees our academic programs and ensures that our curriculum meets the highest educational standards while keeping learning fun and engaging for children.',
      email: 'ayesha@drsofia-daycare.com',
      phone: '+92-XXX-XXXXXXX'
    },
    {
      name: 'Ms. Fatima Malik',
      designation: 'Senior Child Care Specialist',
      qualifications: 'B.A. in Child Psychology',
      experience: '10+ years',
      specialization: 'Infant & Toddler Care',
      bio: 'Fatima specializes in caring for our youngest children, ensuring they receive the love, attention, and developmental support they need during their crucial early years.',
      email: 'fatima@drsofia-daycare.com',
      phone: '+92-XXX-XXXXXXX'
    },
    {
      name: 'Mr. Ahmed Hassan',
      designation: 'Physical Education Coordinator',
      qualifications: 'B.A. in Physical Education',
      experience: '8+ years',
      specialization: 'Children\'s Fitness & Sports',
      bio: 'Ahmed leads our physical education programs, helping children develop motor skills, coordination, and a love for physical activity through fun and age-appropriate exercises.',
      email: 'ahmed@drsofia-daycare.com',
      phone: '+92-XXX-XXXXXXX'
    },
    {
      name: 'Ms. Zainab Ali',
      designation: 'Art & Creativity Teacher',
      qualifications: 'B.F.A. in Fine Arts',
      experience: '7+ years',
      specialization: 'Creative Arts & Crafts',
      bio: 'Zainab nurtures children\'s creativity through various art forms, helping them express themselves while developing fine motor skills and artistic appreciation.',
      email: 'zainab@drsofia-daycare.com',
      phone: '+92-XXX-XXXXXXX'
    },
    {
      name: 'Ms. Sarah Qureshi',
      designation: 'Nutrition Coordinator',
      qualifications: 'M.S. in Nutrition Science',
      experience: '6+ years',
      specialization: 'Child Nutrition & Meal Planning',
      bio: 'Sarah ensures that all our children receive nutritious, balanced meals that support their growth and development while accommodating various dietary needs.',
      email: 'sarah@drsofia-daycare.com',
      phone: '+92-XXX-XXXXXXX'
    }
  ];

  const qualifications = [
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'All staff members hold relevant qualifications in early childhood education or related fields'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Our team brings decades of combined experience in childcare and education'
    },
    {
      icon: Heart,
      title: 'Passionate Caregivers',
      description: 'Every team member is passionate about child development and wellbeing'
    },
    {
      icon: Star,
      title: 'Ongoing Training',
      description: 'Regular professional development ensures our team stays current with best practices'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our dedicated professionals are committed to providing the highest quality care and education for your children
          </p>
        </div>

        {/* Team Qualifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualifications.map((qual, index) => (
            <Card key={index} className="text-center shadow-soft">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <qual.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {qual.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {qual.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-shadow">
              <CardContent className="p-6">
                {/* Profile Picture Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-light to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                {/* Basic Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.designation}
                  </p>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {member.experience}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {member.specialization}
                    </Badge>
                  </div>
                </div>
                
                {/* Qualifications */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground text-sm mb-1">Qualifications:</h4>
                  <p className="text-muted-foreground text-sm">{member.qualifications}</p>
                </div>
                
                {/* Bio */}
                <div className="mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Our Team Section */}
        <Card className="bg-primary text-primary-foreground shadow-soft">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Our Amazing Team
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Are you passionate about early childhood education? We're always looking for dedicated professionals to join our team.
            </p>
            <div className="space-y-4">
              <p className="opacity-80">
                We offer competitive compensation, professional development opportunities, and a supportive work environment.
              </p>
              <div className="space-x-4">
                <a
                  href="mailto:careers@drsofia-daycare.com"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  careers@drsofia-daycare.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Team;